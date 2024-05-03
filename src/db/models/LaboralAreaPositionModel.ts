import { uuid } from 'uuidv4';
import type { LaboralAreaPosition } from '../types';
import { openDb } from '../dbClient';
import { getDateISOString } from '../utils';
import { TABLE_NAMES } from '../constants';

const createIfNotExists = async ({
    name,
    laboralAreaId,
}: Pick<LaboralAreaPosition, 'name' | 'laboralAreaId'>) => {
    const db = await openDb();
    const id = uuid();
    const createdAt = getDateISOString();

    const records = await db.get(
        ` SELECT * FROM ${TABLE_NAMES.laboralAreaPosition}
        WHERE name = :name AND laboralAreaId = :laboralAreaId
        COLLATE NOCASE
        `,
        {
            ':name': name,
            ':laboralAreaId': laboralAreaId,
        }
    );

    // TODO check that this one is ok
    if (records.length === 1 && records?.[0]?.id) return { id: records[0].id };

    await db.run(
        `
        INSERT INTO ${TABLE_NAMES.laboralAreaPosition}(id, name, laboralAreaId, createdAt) 
            VALUES(:id, :name, :laboralAreaId, :createdAt)
    `,
        {
            ':id': id,
            ':name': name,
            ':laboralAreaId': laboralAreaId,
            ':createdAt': createdAt,
        }
    );

    return { id };
};

const getByLaborAreaId = async ({
    laboralAreaId,
}: Pick<LaboralAreaPosition, 'laboralAreaId'>) => {
    const db = await openDb();

    // TODO check that this one is ok
    const records = await db.get(
        ` SELECT * FROM ${TABLE_NAMES.laboralAreaPosition}
        WHERE laboralAreaId = :laboralAreaId
        `,
        { ':laboralAreaId': laboralAreaId }
    );

    return { records };
};

export default {
    createIfNotExists,
    getByLaborAreaId,
};
