import { uuid } from 'uuidv4';
import type { User } from '../types';
import { openDb } from '../dbClient';
import { getDateISOString } from '../utils';
import { TABLE_NAMES } from '../constants';

export const create = async ({
    externalId,
    gender,
}: Pick<User, 'externalId' | 'gender'>) => {
    const db = await openDb();
    const id = uuid();
    const createdAt = getDateISOString();

    await db.run(
        `
        INSERT INTO ${TABLE_NAMES.user}(id, createdAt, age, gender, externalId) 
            VALUES(:gender, :createdAt, :age, :externalId)
    `,
        {
            ':id': id,
            ':createdAt': createdAt,
            ':gender': gender,
            ':externalId': externalId,
        }
    );

    return { id };
};

export default {
    create,
};
