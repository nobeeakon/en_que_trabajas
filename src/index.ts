import path from 'path';
import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import 'dotenv/config';

import nunjucks from 'nunjucks';
import '@total-typescript/ts-reset';

import { BadRequestValidationError } from './errors';
import { HTTP_CODES } from './utils';

// routes
import apiRoutes from './routes/api';
import frontEnd from './routes/frontend';

const app = express();
nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
    express: app,
});

const PORT = process.env?.PORT ?? 3000;

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use('/api', apiRoutes);
app.use('/', frontEnd);

// serve static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err?.stack);

    if (err instanceof BadRequestValidationError) {
        return res
            .status(err.status)
            .send({ error: err?.message ?? 'Something went wrong' });
    }

    return res
        .status(HTTP_CODES[500].internalServerError)
        .send({ error: 'Something went wrong' });
});

app.all('*', (_req, res) => {
    res.status(404).render('pages/error/error.njk');
});

app.listen(PORT, () => {
    console.log(`Server listening to: http://localhost:${PORT}`);
});
