import path from 'path';
import express, { NextFunction, Request, Response } from 'express';

import nunjucks from 'nunjucks';
import '@total-typescript/ts-reset';

import { ExpressError } from './errors';
import { HTTP_CODES } from './utils';

// routes
import apiRoutes from './routes/api';
import frontEnd from './routes/frontend';

apiRoutes.get('/', (req, res) => {
    console.log('hola api route');
    res.json({ hola: 'api route' }).status(200);
});

const app = express();
nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
    express: app,
});

const PORT = 3000;

app.use('/api', apiRoutes);
app.get('/', frontEnd);

// serve static files
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);

    const errMessage = err.message ?? 'Something went wrong';
    if (err instanceof ExpressError) {
        return res.status(err.status).send({ error: errMessage });
    }

    return res
        .status(HTTP_CODES[500].internalServerError)
        .send({ error: errMessage });
});

app.listen(PORT, () => {
    console.log(`Server listening to: http://localhost:${PORT}`);
});
