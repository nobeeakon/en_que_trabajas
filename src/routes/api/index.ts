import { Router } from 'express';
import { NextFunction, Request, Response } from 'express';
import UserInfoRoutes from './userInfo';

const router = Router();

router.use('/words', UserInfoRoutes);

export default router;
