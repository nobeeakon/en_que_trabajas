import { Router } from 'express';
// import { v4 as uuidV4 } from 'uuid';
import {
    v4 as uuidV4,
    validate as uuidValidate,
    version as uuidVersion,
} from 'uuid';
import UserModel from '../../db/models/UserModel';
import DegreeTitleModel from '../../db/models/DegreeTitleModel';
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

router.get('/', async (req, res) => {
    const externalUserId: string | undefined = req.signedCookies?.userId;
    const userCount = await UserModel.count();
    const degreeTitleCount = await DegreeTitleModel.count();

    const countByDegreeLevel = degreeTitleCount.countByDegreeLevel
        .map((degreeLevelItem) =>
            isDegreeLevelTypeGuard(degreeLevelItem.degreeLevel) &&
            STUDY_LEVEL_NAMES[degreeLevelItem.degreeLevel]
                ? {
                      ...degreeLevelItem,
                      degreeLevelName:
                          STUDY_LEVEL_NAMES[degreeLevelItem.degreeLevel].name,
                  }
                : null
        )
        .filter(Boolean);

    const userExists = !externalUserId
        ? false
        : await UserModel.userExist({
              externalId: externalUserId,
          });

    res.render('pages/home/home.njk', {
        name: 'aqui',
        showSurvey: !userExists,
        stats: {
            reviewsCount: userCount?.count,
            countByDegreeLevel,
        },
    });
});

export default router;
