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

const mexicanStateStatsByDegreeTitle = async ({
    degreeTitleId,
}: {
    degreeTitleId: string;
}) => {
    const db = await openDb();

    return await db.all<
        {
            mexicanState: string;
            count: number;
            avgSalary: number;
        }[]
    >(
        `SELECT uj.mexicanState AS mexicanState, COUNT(1) as count, AVG(uj.salary) as avgSalary 
            FROM ${TABLE_NAMES.userJob} as uj
                LEFT JOIN ${TABLE_NAMES.userDegree} ud ON ud.userId = uj.userId
            WHERE ud.titleId = :degreeTitleId 
            GROUP BY uj.mexicanState
        `,
        {
            ':degreeTitleId': degreeTitleId,
        }
    );
};

const laboralSituationStatsByDegreeTitle = async ({
    degreeTitleId,
}: {
    degreeTitleId: string;
}) => {
    const db = await openDb();

    return await db.all<
        {
            laboralSituation: string;
            count: number;
            avgSalary: number;
        }[]
    >(
        `SELECT uj.laboralSituation AS laboralSituation, COUNT(1) as count, AVG(uj.salary) as avgSalary 
            FROM ${TABLE_NAMES.user} as u
                LEFT JOIN ${TABLE_NAMES.userDegree} ud ON ud.userId = u.id
                LEFT JOIN ${TABLE_NAMES.userJob} uj ON uj.userId = u.id
            WHERE ud.titleId = :degreeTitleId 
            GROUP BY uj.laboralSituation
        `,
        {
            ':degreeTitleId': degreeTitleId,
        }
    );
};

export default {
    create,
    count,
    mexicanStateStatsByDegreeTitle,
    laboralSituationStatsByDegreeTitle,
};
