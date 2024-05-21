import { v4 as uuidV4 } from 'uuid';
import type { Institution } from '../types';
import { openDb } from '../dbClient';
import {
    getDateISOString,
    normalizeString,
    cleanString,
    capitalizeFirstLetter,
} from '../utils';
import { TABLE_NAMES } from '../constants';

const createIfNotExists = async ({
    name: inputName,
}: Pick<Institution, 'name'>) => {
    const db = await openDb();
    const id = uuidV4();
    const createdAt = getDateISOString();
    const name = capitalizeFirstLetter(cleanString(inputName));
    const normalizedName = normalizeString(inputName);

    const records = await db.all<Institution[]>(
        ` SELECT * FROM ${TABLE_NAMES.institution}
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
        INSERT INTO ${TABLE_NAMES.institution}(id, name, createdAt, normalizedName) 
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

const getLikeName = async ({ name }: Pick<Institution, 'name'>) => {
    const db = await openDb();
    const normalizedName = normalizeString(name);

    const records = await db.all<Institution[]>(
        ` SELECT * FROM ${TABLE_NAMES.institution}
        WHERE normalizedName LIKE :normalizedName 
        COLLATE NOCASE
        LIMIT 5
        `,
        { ':normalizedName': `%${normalizedName}%` }
    );

    return { records };
};

const count = async () => {
    const db = await openDb();

    const data = await db.get<{ count: number }>(
        `SELECT COUNT(1) AS count FROM ${TABLE_NAMES.institution}`
    );

    return data;
};

const statsByDegreeTitle = async ({
    degreeTitleId,
}: {
    degreeTitleId: string;
}) => {
    const db = await openDb();

    return await db.all<{
        name: string;
        count: number;
        avgSalary: number;
    }>(
        `SELECT i.name AS name, COUNT(1) as count
            FROM ${TABLE_NAMES.userDegree} as ud
                LEFT JOIN ${TABLE_NAMES.institution} i ON i.id = ud.institutionId
            WHERE ud.titleId = :degreeTitleId 
            GROUP BY i.name
        `,
        {
            ':degreeTitleId': degreeTitleId,
        }
    );
};

export default {
    createIfNotExists,
    getLikeName,
    count,
    statsByDegreeTitle,
};
