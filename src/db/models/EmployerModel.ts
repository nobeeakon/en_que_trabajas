import { v4 as uuidV4 } from 'uuid';
import type { Employer } from '../types';
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
}: Pick<Employer, 'name'>) => {
    const db = await openDb();
    const id = uuidV4();
    const createdAt = getDateISOString();
    const name = capitalizeFirstLetter(cleanString(inputName));
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

const getLikeName = async ({ name }: Pick<Employer, 'name'>) => {
    const db = await openDb();
    const normalizedName = normalizeString(name);

    const records = await db.all<Employer[]>(
        ` SELECT * FROM ${TABLE_NAMES.employer}
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
        `SELECT COUNT(1) AS count FROM ${TABLE_NAMES.employer}`
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
        `SELECT e.name AS name, COUNT(1) as count
            FROM ${TABLE_NAMES.user} as u
                LEFT JOIN ${TABLE_NAMES.userDegree} ud ON ud.userId = u.id
                LEFT JOIN ${TABLE_NAMES.userJob} uj ON uj.userId = u.id
                LEFT JOIN ${TABLE_NAMES.employer} e ON e.id = uj.employerId
            WHERE ud.titleId = :degreeTitleId 
            GROUP BY e.name
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
