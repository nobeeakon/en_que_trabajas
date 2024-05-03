import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('pages/home/home.njk', { name: 'aqui', showSurvey: true });
});

export default router;
