import { v4 as uuidV4 } from 'uuid';
import type { DegreeTitle } from '../types';
import { openDb } from '../dbClient';
import {
    getDateISOString,
    normalizeString,
    cleanString,
    capitalizeFirstLetter,
} from '../utils'; // 1
import { TABLE_NAMES } from '../constants';

const createIfNotExists = async ({
    name: inputName,
    degreeLevel,
}: Pick<DegreeTitle, 'name' | 'degreeLevel'>) => {
    const db = await openDb();
    const id = uuidV4();
    const createdAt = getDateISOString();
    const name = capitalizeFirstLetter(cleanString(inputName));
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

const getByDegreeLevelAndLikeName = async ({
    name,
    degreeLevel,
}: Pick<DegreeTitle, 'name' | 'degreeLevel'>) => {
    const db = await openDb();
    const normalizedName = normalizeString(name);

    const records = await db.all<DegreeTitle[]>(
        ` SELECT * FROM ${TABLE_NAMES.degreeTitle}
        WHERE normalizedName LIKE :normalizedName AND degreeLevel = :degreeLevel
        COLLATE NOCASE
        LIMIT 5
        `,
        {
            ':normalizedName': `%${normalizedName}%`,
            ':degreeLevel': degreeLevel,
        }
    );

    return { records };
};

// TODO check this one, seems weird that is doing 2 things at the same time
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

const getDegreeTitleList = async () => {
    const db = await openDb();

    const data = await db.all<
        { id: string; name: string; degreeLevel: string }[]
    >(
        `
        SELECT id, name, degreeLevel FROM ${TABLE_NAMES.degreeTitle}
        `
    );

    return data;
};

export default {
    createIfNotExists,
    getDegreeTitleList,
    getByDegreeLevelAndLikeName,
    count,
};
