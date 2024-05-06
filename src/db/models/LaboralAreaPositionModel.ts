import { v4 as uuidV4 } from 'uuid';
import type { LaboralAreaPosition } from '../types';
import { openDb } from '../dbClient';
import { getDateISOString, normalizeString, stringCleanSpaces } from '../utils';
import { TABLE_NAMES } from '../constants';

const createIfNotExists = async ({
    name: inputName,
    laboralAreaId,
}: Pick<LaboralAreaPosition, 'name' | 'laboralAreaId'>) => {
    const db = await openDb();
    const id = uuidV4();
    const createdAt = getDateISOString();
    const name = stringCleanSpaces(inputName);
    const normalizedName = normalizeString(inputName);

    const records = await db.all<LaboralAreaPosition[]>(
        ` SELECT * FROM ${TABLE_NAMES.laboralAreaPosition}
        WHERE normalizedName = :normalizedName AND laboralAreaId = :laboralAreaId
        COLLATE NOCASE
        `,
        {
            ':normalizedName': normalizedName,
            ':laboralAreaId': laboralAreaId,
        }
    );

    if (records.length > 0) {
        const itemWithId = records.find((recordItem) => recordItem.id);
        if (itemWithId) return { id: itemWithId.id };
    }

    await db.run(
        `
        INSERT INTO ${TABLE_NAMES.laboralAreaPosition}(id, name, laboralAreaId, createdAt, normalizedName) 
            VALUES(:id, :name, :laboralAreaId, :createdAt, :normalizedName)
    `,
        {
            ':id': id,
            ':name': name,
            ':laboralAreaId': laboralAreaId,
            ':createdAt': createdAt,
            ':normalizedName': normalizedName,
        }
    );

    return { id };
};

const getByLaborAreaId = async ({
    laboralAreaId,
}: Pick<LaboralAreaPosition, 'laboralAreaId'>) => {
    const db = await openDb();

    const records = await db.all<LaboralAreaPosition[]>(
        ` SELECT * FROM ${TABLE_NAMES.laboralAreaPosition}
        WHERE laboralAreaId = :laboralAreaId
        `,
        { ':laboralAreaId': laboralAreaId }
    );

    return { records };
};

const count = async () => {
    const db = await openDb();

    const data = await db.get<{ count: number }>(
        `SELECT COUNT(1) AS count FROM ${TABLE_NAMES.laboralAreaPosition}`
    );

    return data;
};

export default {
    createIfNotExists,
    getByLaborAreaId,
    count,
};
