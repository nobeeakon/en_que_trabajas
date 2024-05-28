import { Request } from 'express';
import { z, AnyZodObject, ZodError } from 'zod';
import { BadRequestError, BadRequestValidationError } from '../errors';

// TODO sanitize/escape? sql injection
export const validateReq = async <ZodSchema extends AnyZodObject>(
    schema: ZodSchema,
    req: Request
): Promise<z.infer<ZodSchema>> => {
    try {
        const validated = await schema.parseAsync(req);
        return validated;
    } catch (error) {
        if (error instanceof ZodError) {
            return Promise.reject(new BadRequestValidationError(error.message));
        }

        return Promise.reject(new BadRequestError(String(error)));
    }
};
