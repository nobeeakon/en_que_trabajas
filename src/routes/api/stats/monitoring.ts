import { Router } from 'express';
import MonitoringRequestModel from '../../../db/models/MonitoringRequestModel';

const router = Router();

// TODO: make something better
router.get('/monitoring', async (_req, res) => {
    try {
        const monitoringData = await MonitoringRequestModel.get();

        return res.json(monitoringData.reverse());
    } catch (error) {
        return res.json({});
    }
});

export default router;
