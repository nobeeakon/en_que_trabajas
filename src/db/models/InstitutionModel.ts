import { uuid } from 'uuidv4';
import type { Institution } from '../types';
import { openDb } from '../dbClient';
import { getDateISOString } from '../utils';
import { TABLE_NAMES } from '../constants';

const createIfNotExists = async ({ name }: Pick<Institution, 'name'>) => {
    const db = await openDb();
    const id = uuid();
    const createdAt = getDateISOString();

    const records = await db.get(
        ` SELECT * FROM ${TABLE_NAMES.institution}
        WHERE name = :name 
        COLLATE NOCASE
        `,
        { ':name': name }
    );

    // TODO check that this one is ok
    if (records.length === 1 && records?.[0]?.id) return { id: records[0].id };

    await db.run(
        `
        INSERT INTO ${TABLE_NAMES.institution}(id, name, createdAt) 
            VALUES(:id, :name, :createdAt)
    `,
        {
            ':id': id,
            ':name': name,
            ':createdAt': createdAt,
        }
    );

    return { id };
};

const getByName = async ({ name }: Pick<Institution, 'name'>) => {
    const db = await openDb();

    // TODO check that this one is ok
    const records = await db.get(
        ` SELECT * FROM ${TABLE_NAMES.institution}
        WHERE name LIKE '%:name%' 
        COLLATE NOCASE
        `,
        { ':name': name }
    );

    return { records };
};

export default {
    createIfNotExists,
    getByName,
};
