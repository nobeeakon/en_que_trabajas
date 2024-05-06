import { v4 as uuidV4 } from 'uuid';
import type { DegreeTitle } from '../types';
import { openDb } from '../dbClient';
import { getDateISOString, normalizeString, stringCleanSpaces } from '../utils'; // 1
import { TABLE_NAMES } from '../constants';

const createIfNotExists = async ({
    name: inputName,
    degreeLevel,
}: Pick<DegreeTitle, 'name' | 'degreeLevel'>) => {
    const db = await openDb();
    const id = uuidV4();
    const createdAt = getDateISOString();
    const name = stringCleanSpaces(inputName);
    const normalizedName = normalizeString(inputName);

    const records = await db.all<DegreeTitle[]>(
        ` SELECT * FROM ${TABLE_NAMES.degreeTitle}
        WHERE normalizedName = :normalizedName AND degreeLevel = :degreeLevel
        COLLATE NOCASE
        `,
        { ':normalizedName': normalizedName, ':degreeLevel': degreeLevel }
    );

    if (records.length > 0) {
        const itemWithId = records.find((recordItem) => recordItem.id);
        if (itemWithId) return { id: itemWithId.id };
    }

    await db.run(
        `
        INSERT INTO ${TABLE_NAMES.degreeTitle}(id, name, createdAt, normalizedName, degreeLevel) 
            VALUES(:id, :name, :createdAt, :normalizedName, :degreeLevel) 
    `,
        {
            ':id': id,
            ':name': name,
            ':createdAt': createdAt,
            ':normalizedName': normalizedName,
            ':degreeLevel': degreeLevel,
        }
    );

    return { id };
};

const getByName = async ({ name }: Pick<DegreeTitle, 'name'>) => {
    const db = await openDb();

    const records = await db.all<DegreeTitle[]>(
        ` SELECT * FROM ${TABLE_NAMES.degreeTitle}
        WHERE name LIKE '%:name%' 
        COLLATE NOCASE
        `,
        { ':name': name }
    );

    return { records };
};

const count = async () => {
    const db = await openDb();

    const data = await db.all<{ name: string; degreeLevel: string }[]>(
        `SELECT  name, degreeLevel FROM ${TABLE_NAMES.degreeTitle}
            GROUP BY normalizedName, degreeLevel
            LIMIT 20
        `
    );

    const countByDegreeLevel = await db.all<
        { count: number; degreeLevel: string }[]
    >(
        ` SELECT COUNT(*) AS count, degreeLevel FROM ${TABLE_NAMES.degreeTitle}
            GROUP BY degreeLevel
        `
    );

    return {
        countByDegreeLevel: countByDegreeLevel ?? [],
        data,
    };
};

export default {
    createIfNotExists,
    getByName,
    count,
};
