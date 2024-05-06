import { v4 as uuidV4 } from 'uuid';
import type { User } from '../types';
import { openDb } from '../dbClient';
import { getDateISOString } from '../utils';
import { TABLE_NAMES } from '../constants';

const create = async ({
    externalId,
    gender,
}: Pick<User, 'externalId' | 'gender'>): Promise<{ id: string }> => {
    const db = await openDb();
    const id = uuidV4();
    const createdAt = getDateISOString();

    await db.run(
        `
        INSERT INTO ${TABLE_NAMES.user} (id, createdAt, gender, externalId) 
            VALUES(:id, :createdAt, :gender, :externalId)
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

const userExist = async ({ externalId }: Pick<User, 'externalId'>) => {
    const db = await openDb();

    const userAlreadyExists = await db.get<{ isPresent: 1 }>(
        `
        SELECT 1 AS isPresent FROM ${TABLE_NAMES.user} WHERE externalId = :externalId
    `,
        {
            ':externalId': externalId,
        }
    );

    return !!userAlreadyExists?.isPresent;
};

const count = async () => {
    const db = await openDb();

    const data = await db.get<{ count: number }>(
        `SELECT COUNT(1) AS count FROM ${TABLE_NAMES.user}`
    );

    return data;
};

export default {
    create,
    count,
    userExist,
};
