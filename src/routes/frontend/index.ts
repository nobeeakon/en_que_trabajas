import { Router } from 'express';
import {
    v4 as uuidV4,
    validate as uuidValidate,
    version as uuidVersion,
} from 'uuid';
import UserModel from '../../db/models/UserModel';
import DegreeTitleModel from '../../db/models/DegreeTitleModel';
import UserDegreeModel from '../../db/models/UserDegreeModel';
import MonitoringRequestModel from '../../db/models/MonitoringRequestModel';
import { isDegreeLevelTypeGuard } from '../../db/types';
import { STUDY_LEVEL_NAMES } from '../../db/constants';

const router = Router();

router.use((req, res, next) => {
    const signedCookies = req.signedCookies;

    const userId: string = signedCookies?.userId ?? '';

    const isValidUserId =
        !!userId && uuidValidate(userId) && uuidVersion(userId) === 4;
    const cookieOptions = {
        signed: true,
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'strict',
    } as const;

    if (isValidUserId) {
        res.cookie('userId', userId, {
            ...cookieOptions,
            maxAge: 10 * 24 * 60 * 60 * 1000, // increase life time
        });
    } else {
        res.cookie('userId', uuidV4(), cookieOptions);
    }
    next();
});

router.use((_req, res, next) => {
    const nonce = Math.floor(Math.random() * 10000).toString();

    res.setHeader(
        'Content-Security-Policy',
        ` default-src 'self'; script-src 'nonce-${nonce}';style-src 'self'; font-src 'self; img-src 'self'; frame-src 'self';`
    );

    res.locals.nonce = nonce;

    next();
});

router.get('/', async (req, res, next) => {
    try {
        const externalUserId: string | undefined = req.signedCookies?.userId;
        const userCount = await UserModel.count();
        const degreeTitleCount = await DegreeTitleModel.count();
        const degreeTitleList = await DegreeTitleModel.getDegreeTitleList();
        const userByDegreeLevelCount =
            await UserDegreeModel.countByDegreeLevel();

        const countByDegreeLevel = degreeTitleCount.countByDegreeLevel
            .map((degreeLevelItem) =>
                isDegreeLevelTypeGuard(degreeLevelItem.degreeLevel)
                    ? {
                          ...degreeLevelItem,
                          degreeLevelName:
                              STUDY_LEVEL_NAMES[degreeLevelItem.degreeLevel]
                                  .displayName,
                      }
                    : null
            )
            .filter(Boolean);

        const degreeTitles = degreeTitleList
            .map((degreeTitleItem) =>
                isDegreeLevelTypeGuard(degreeTitleItem.degreeLevel)
                    ? {
                          ...degreeTitleItem,
                          degreeLevelName:
                              STUDY_LEVEL_NAMES[degreeTitleItem.degreeLevel]
                                  .displayName,
                      }
                    : null
            )
            .filter(Boolean)
            .sort((a, b) =>
                a.degreeLevelName.localeCompare(b.degreeLevelName, 'es', {
                    sensitivity: 'base',
                })
            );

        const userByDegreeLevelCountWithDisplayName = userByDegreeLevelCount
            .map((userCountItem) =>
                isDegreeLevelTypeGuard(userCountItem.degreeLevel)
                    ? {
                          ...userCountItem,
                          degreeLevelName:
                              STUDY_LEVEL_NAMES[userCountItem.degreeLevel]
                                  .displayName,
                      }
                    : null
            )
            .filter(Boolean);

        const userExists = !externalUserId
            ? false
            : await UserModel.userExist({
                  externalId: externalUserId,
              });

        await MonitoringRequestModel.create({
            counterName: 'home_page',
            requestMethod: 'get',
            requestStatus: 'ok',
        });

        res.render('pages/home/home.njk', {
            showSurvey: !userExists,
            showStats: false,
            stats: {
                reviewsCount: userCount?.count ?? 0,
                countByDegreeLevel,
                userByDegreeLevelCount: userByDegreeLevelCountWithDisplayName,
            },
            degreeTitles,
            nonce: res.locals.nonce ?? '',
        });
    } catch (error) {
        await MonitoringRequestModel.create({
            counterName: 'home_page',
            requestMethod: 'get',
            requestStatus: 'error',
            data: String(error),
        });

        return res.redirect('/error');
    }
});

router.get('/error', (_req, res) => {
    res.render('pages/error/error.njk');
});

export default router;
