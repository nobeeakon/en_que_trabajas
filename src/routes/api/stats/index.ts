import { Router } from 'express';

import UserModel from '../../../db/models/UserModel';
import DegreeTitleModel from '../../../db/models/DegreeTitleModel';
import LaboralAreaModel from '../../../db/models/LaboralAreaModel';
import LaboralAreaPositionModel from '../../../db/models/LaboralAreaPositionModel';
import UserJobModel from '../../../db/models/UserJobModel';
import EmployerModel from '../../../db/models/EmployerModel';
import InstitutionModel from '../../../db/models/InstitutionModel';
import UserDegreeModel from '../../../db/models/UserDegreeModel';
import {
    LABORAL_SITUATION,
    USER_GENDER,
    MEXICAN_STATES,
} from '../../../db/constants';
import {
    isUserGenderTypeGuard,
    isMexicanStateTypeGuard,
    isLaboralSituationTypeGuard,
} from '../../../db/types';
import MonitoringRequestModel from '../../../db/models/MonitoringRequestModel';
import monitoring from './monitoring';

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const userCount = await UserModel.count();
        const degreeTitleCount = await DegreeTitleModel.count();

        await MonitoringRequestModel.create({
            counterName: 'stats_api',
            requestMethod: 'get',
            requestStatus: 'ok',
        });
        return res.json({
            reviewsCount: userCount?.count,
            degreeTitleCount,
        });
    } catch (error) {
        await MonitoringRequestModel.create({
            counterName: 'stats_api',
            requestMethod: 'get',
            requestStatus: 'error',
            data: String(error),
        });
        next(error);
    }
});

// TODO: make something better
router.use(monitoring);

router.get('/:degreeTitleId', async (req, res, next) => {
    try {
        const degreeTitleId = req.params.degreeTitleId;

        const genderStats = await UserModel.genderStatsByDegreeTitle({
            degreeTitleId,
        });
        const genderStatsWithDisplayName = genderStats
            .map((genderItem) =>
                !isUserGenderTypeGuard(genderItem.gender)
                    ? null
                    : {
                          ...genderItem,
                          displayName: USER_GENDER[genderItem.gender],
                      }
            )
            .filter(Boolean);

        const laboralAreaStats = await LaboralAreaModel.statsByDegreeTitle({
            degreeTitleId,
        });
        const laboralAreaPositionStats =
            await LaboralAreaPositionModel.statsByDegreeTitle({
                degreeTitleId,
            });

        const mexicanStateStats =
            await UserJobModel.mexicanStateStatsByDegreeTitle({
                degreeTitleId,
            });
        const mexicanStateWithDisplayNameStats = mexicanStateStats
            .map((stateItem) =>
                !isMexicanStateTypeGuard(stateItem.mexicanState)
                    ? null
                    : {
                          ...stateItem,
                          displayName: MEXICAN_STATES[stateItem.mexicanState],
                      }
            )
            .filter(Boolean);

        const employerStats = await EmployerModel.statsByDegreeTitle({
            degreeTitleId,
        });
        const institutionStats = await InstitutionModel.statsByDegreeTitle({
            degreeTitleId,
        });
        const laboralsSituationStats =
            await UserJobModel.laboralSituationStatsByDegreeTitle({
                degreeTitleId,
            });
        const laboralsSituationWithDisplayNameStats = laboralsSituationStats
            .map((laboralSituationItem) =>
                !isLaboralSituationTypeGuard(
                    laboralSituationItem.laboralSituation
                )
                    ? null
                    : {
                          ...laboralSituationItem,
                          displayName:
                              LABORAL_SITUATION[
                                  laboralSituationItem.laboralSituation
                              ],
                      }
            )
            .filter(Boolean);

        const jobRelatedStats =
            await UserDegreeModel.isJobRelatedStatsByDegreeTitle({
                degreeTitleId,
            });

        const data = {
            genderStats: genderStatsWithDisplayName,
            laboralAreaStats,
            laboralAreaPositionStats,
            mexicanStateStats: mexicanStateWithDisplayNameStats,
            employerStats,
            institutionStats,
            laboralsSituationStats: laboralsSituationWithDisplayNameStats,
            jobRelatedStats,
        };

        await MonitoringRequestModel.create({
            counterName: 'stats_api',
            requestMethod: 'get',
            requestStatus: 'ok',
        });
        return res.json(data);
    } catch (error) {
        await MonitoringRequestModel.create({
            counterName: 'stats_api',
            requestMethod: 'get',
            requestStatus: 'error',
            data: String(error),
        });
        next(error);
    }
});

export default router;
