import { HTTP_CODES } from './utils';

export class ExpressError extends Error {
    status: number;
    constructor(message: string, status: number, name: string) {
        super(message);
        this.status = status;
        this.name = name;
    }
}

export class BadRequestError extends ExpressError {
    constructor(message: string) {
        super(message, HTTP_CODES[400].badRequest, 'Bad Request');
    }
}
