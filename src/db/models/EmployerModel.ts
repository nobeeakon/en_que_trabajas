import { v4 as uuidV4 } from 'uuid';
import type { Employer } from '../types';
import { openDb } from '../dbClient';
import { getDateISOString, normalizeString, stringCleanSpaces } from '../utils';
import { TABLE_NAMES } from '../constants';

const createIfNotExists = async ({
    name: inputName,
}: Pick<Employer, 'name'>) => {
    const db = await openDb();
    const id = uuidV4();
    const createdAt = getDateISOString();
    const name = stringCleanSpaces(inputName);
    const normalizedName = normalizeString(inputName);

    const records = await db.all<Employer[]>(
        ` SELECT * FROM ${TABLE_NAMES.employer}
        WHERE normalizedName = :normalizedName 
        COLLATE NOCASE
        `,
        { ':normalizedName': normalizedName }
    );

    if (records.length > 0) {
        const itemWithId = records.find((recordItem) => recordItem.id);
        if (itemWithId) return { id: itemWithId.id };
    }

    await db.run(
        `
        INSERT INTO ${TABLE_NAMES.employer}(id, name, createdAt, normalizedName) 
            VALUES(:id, :name, :createdAt, :normalizedName)
    `,
        {
            ':id': id,
            ':name': name,
            ':createdAt': createdAt,
            ':normalizedName': normalizedName,
        }
    );

    return { id };
};

const getByName = async ({ name }: Pick<Employer, 'name'>) => {
    const db = await openDb();

    const records = await db.all<Employer[]>(
        ` SELECT * FROM ${TABLE_NAMES.employer}
        WHERE name LIKE '%:name%' 
        COLLATE NOCASE
        `,
        { ':name': name }
    );

    return { records };
};

const count = async () => {
    const db = await openDb();

    const data = await db.get<{ count: number }>(
        `SELECT COUNT(1) AS count FROM ${TABLE_NAMES.employer}`
    );

    return data;
};

export default {
    createIfNotExists,
    getByName,
    count,
};
