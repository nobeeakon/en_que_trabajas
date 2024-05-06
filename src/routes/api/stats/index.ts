import { Router } from 'express';

import UserModel from '../../../db/models/UserModel';
import DegreeTitleModel from '../../../db/models/DegreeTitleModel';
import { isDegreeLevelTypeGuard } from '../../../db/types';
import { STUDY_LEVEL_NAMES } from '../../../db/constants';

const router = Router();

router.get('/', async (req, res, next) => {
    const userCount = await UserModel.count();
    const degreeTitleCount = await DegreeTitleModel.count();

    return res.json({
        reviewsCount: userCount?.count,
        degreeTitleCount,
    });
});

export default router;
