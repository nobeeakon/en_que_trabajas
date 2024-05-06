import { v4 as uuidV4 } from 'uuid';
import type { UserJob } from '../types';
import { openDb } from '../dbClient';
import { getDateISOString } from '../utils';
import { TABLE_NAMES } from '../constants';

const create = async ({
    userId,
    laboralSituation,
    salary,
    employerId,
    laboralAreaId,
    laboralAreaPositionId,
    yearsOfExperience,
    mexicanState,
}: Pick<
    UserJob,
    | 'userId'
    | 'laboralSituation'
    | 'salary'
    | 'employerId'
    | 'laboralAreaId'
    | 'laboralAreaPositionId'
    | 'yearsOfExperience'
    | 'mexicanState'
>) => {
    const db = await openDb();
    const id = uuidV4();
    const createdAt = getDateISOString();

    await db.run(
        `
        INSERT INTO ${TABLE_NAMES.userJob}(id, createdAt, userId, laboralSituation, salary, employerId, laboralAreaId, laboralAreaPositionId, yearsOfExperience, mexicanState ) 
            VALUES(:id, :createdAt, :userId, :laboralSituation, :salary, :employerId, :laboralAreaId, :laboralAreaPositionId, :yearsOfExperience, :mexicanState)
    `,
        {
            ':id': id,
            ':createdAt': createdAt,
            ':userId': userId,
            ':laboralSituation': laboralSituation,
            ':salary': salary,
            ':employerId': employerId,
            ':laboralAreaId': laboralAreaId,
            ':laboralAreaPositionId': laboralAreaPositionId,
            ':yearsOfExperience': yearsOfExperience,
            ':mexicanState': mexicanState,
        }
    );

    return { id };
};

const count = async () => {
    const db = await openDb();

    const data = await db.get<{ count: number }>(
        `SELECT COUNT(1) AS count FROM ${TABLE_NAMES.userJob}`
    );

    return data;
};

export default {
    create,
    count,
};
