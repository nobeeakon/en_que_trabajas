import { Router, json } from 'express';
import { NextFunction, Request, Response } from 'express';

import UserInfoRoutes from './userInfo';
import Stats from './stats';

const router = Router();

router.use(json());

router.use('/userInfo', UserInfoRoutes);
router.use('/stats', Stats);

export default router;
