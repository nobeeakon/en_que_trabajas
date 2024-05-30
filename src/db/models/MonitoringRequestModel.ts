import { v4 as uuidV4 } from 'uuid';
import type { MonitoringRequest } from '../types';
import { openDb } from '../dbClient';
import { getDateISOString } from '../utils';
import { TABLE_NAMES } from '../constants';

const create = async ({
    counterName,
    requestMethod,
    requestStatus,
    data,
}: Pick<
    MonitoringRequest,
    'counterName' | 'requestMethod' | 'requestStatus' | 'data'
>) => {
    const db = await openDb();
    const id = uuidV4();
    const createdAt = getDateISOString();

    await db.run(
        `
        INSERT INTO ${TABLE_NAMES.monitoringRequest}(id, createdAt, counterName, requestStatus, requestMethod, data) 
            VALUES(:id, :createdAt, :counterName, :requestStatus, :requestMethod, :data)
    `,
        {
            ':id': id,
            ':createdAt': createdAt,
            ':counterName': counterName,
            ':requestStatus': requestStatus,
            ':requestMethod': requestMethod,
            ':data': data,
        }
    );

    return { id };
};

const get = async () => {
    const db = await openDb();

    return await db.all<MonitoringRequest[]>(
        `SELECT * FROM ${TABLE_NAMES.monitoringRequest}`
    );
};

export default {
    create,
    get,
};
