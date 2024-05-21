import { v4 as uuidV4 } from 'uuid';
import type { UserDegree } from '../types';
import { openDb } from '../dbClient';
import { getDateISOString } from '../utils';
import { TABLE_NAMES } from '../constants';

const create = async ({
    userId,
    titleId,
    institutionId,
    startYear,
    mainUserJobId,
}: Pick<
    UserDegree,
    'userId' | 'titleId' | 'institutionId' | 'startYear' | 'mainUserJobId'
>) => {
    const db = await openDb();
    const id = uuidV4();
    const createdAt = getDateISOString();

    await db.run(
        `
        INSERT INTO ${TABLE_NAMES.userDegree}(id, createdAt, userId,  titleId, institutionId, startYear, mainUserJobId) 
            VALUES(:id, :createdAt, :userId, :titleId, :institutionId, :startYear, :mainUserJobId)
    `,
        {
            ':id': id,
            ':createdAt': createdAt,
            ':userId': userId,
            ':titleId': titleId,
            ':institutionId': institutionId,
            ':startYear': startYear,
            ':mainUserJobId': mainUserJobId,
        }
    );

    return { id };
};

const count = async () => {
    const db = await openDb();

    const data = await db.get<{ count: number }>(
        `SELECT COUNT(1) AS count FROM ${TABLE_NAMES.userDegree}`
    );

    return data;
};

const countByDegreeLevel = async () => {
    const db = await openDb();

    return await db.all<{ count: number; degreeLevel: string }[]>(
        `SELECT COUNT(1) AS count, dt.degreeLevel AS degreeLevel
            FROM ${TABLE_NAMES.userDegree} AS ud
            LEFT JOIN ${TABLE_NAMES.degreeTitle} AS dt ON dt.id = ud.titleId
            GROUP BY dt.degreeLevel
            ORDER BY count DESC
        `
    );
};

const isJobRelatedStatsByDegreeTitle = async ({
    degreeTitleId,
}: {
    degreeTitleId: string;
}) => {
    const db = await openDb();

    return await db.get<{ notRelated: number; isRelated: number }>(
        `SELECT 
            SUM(CASE WHEN mainUserJobId IS NULL THEN 1 ELSE 0 END) AS notRelated,
            SUM(CASE WHEN mainUserJobId IS NOT NULL THEN 1 ELSE 0 END) AS isRelated 
            FROM ${TABLE_NAMES.userDegree} ud 
            WHERE ud.titleId = :degreeTitleId 
        `,
        {
            ':degreeTitleId': degreeTitleId,
        }
    );
};

export default {
    create,
    count,
    countByDegreeLevel,
    isJobRelatedStatsByDegreeTitle,
};
