import { v4 as uuidV4 } from 'uuid';
import type { User } from '../types';
import { openDb } from '../dbClient';
import { getDateISOString } from '../utils';
import { TABLE_NAMES } from '../constants';

const create = async ({
    externalId,
    gender,
}: Pick<User, 'externalId' | 'gender'>): Promise<{ id: string }> => {
    const db = await openDb();
    const id = uuidV4();
    const createdAt = getDateISOString();

    await db.run(
        `
        INSERT INTO ${TABLE_NAMES.user} (id, createdAt, gender, externalId) 
            VALUES(:id, :createdAt, :gender, :externalId)
    `,
        {
            ':id': id,
            ':createdAt': createdAt,
            ':gender': gender,
            ':externalId': externalId,
        }
    );

    return { id };
};

const userExist = async ({ externalId }: Pick<User, 'externalId'>) => {
    const db = await openDb();

    const userAlreadyExists = await db.get<{ isPresent?: 1 }>(
        `
        SELECT 1 AS isPresent FROM ${TABLE_NAMES.user} WHERE externalId = :externalId
    `,
        {
            ':externalId': externalId,
        }
    );

    return !!userAlreadyExists?.isPresent;
};

const count = async () => {
    const db = await openDb();

    const data = await db.get<{ count: number }>(
        `SELECT COUNT(1) AS count FROM ${TABLE_NAMES.user}`
    );

    return data;
};

const genderStatsByDegreeTitle = async ({
    degreeTitleId,
}: {
    degreeTitleId: string;
}) => {
    const db = await openDb();

    return await db.all<
        {
            gender: string;
            count: number;
            avgSalary: number;
        }[]
    >(
        `SELECT u.gender AS gender, COUNT(1) as count, AVG(uj.salary) as avgSalary 
            FROM ${TABLE_NAMES.user} as u
                LEFT JOIN ${TABLE_NAMES.userDegree} ud ON ud.userId = u.id
                LEFT JOIN ${TABLE_NAMES.userJob} uj ON uj.userId = u.id
            WHERE ud.titleId = :degreeTitleId 
            GROUP BY u.gender
        `,
        {
            ':degreeTitleId': degreeTitleId,
        }
    );
};

// TODO paginate or something
const allUserDataByDegreeTitle = async ({
    degreeTitleId,
}: {
    degreeTitleId: string;
}) => {
    const db = await openDb();

    return await db.all<
        {
            gender: string;
            userDegreeStartYear: number;
            degreeName: string;
            laboralSituation: string;
            salary: number;
            yearsOfExperience: number;
            mexicanState: string;
            laboralAreaPositionName: string;
            laboralAreaName: string;
            institutionName: string;
            employerName: string;
        }[]
    >(
        `SELECT 
        u.gender AS gender,
        ud.startYear AS userDegreeStartYear,
        d.name AS degreeName, 
        uj.laboralSituation AS laboralSituation, 
        uj.salary AS salary, 
        uj.yearsOfExperience AS yearsOfExperience, 
        uj.mexicanState AS mexicanState,
        lap.name AS laboralAreaPositionName,
        la.name AS laboralAreaName,
        inst.name AS institutionName,
        e.name AS employerName
        FROM ${TABLE_NAMES.user} u
            LEFT JOIN ${TABLE_NAMES.userDegree} ud ON ud.userId = u.id
            LEFT JOIN ${TABLE_NAMES.degreeTitle} d ON d.id = ud.titleId
            LEFT JOIN ${TABLE_NAMES.userJob} uj ON uj.userId = u.id
            LEFT JOIN ${TABLE_NAMES.laboralAreaPosition} lap ON lap.id = uj.laboralAreaPositionId
            LEFT JOIN ${TABLE_NAMES.laboralArea} la ON la.id = lap.laboralAreaId
            LEFT JOIN ${TABLE_NAMES.institution} inst ON inst.id = ud.institutionId
            LEFT JOIN ${TABLE_NAMES.employer} e ON e.id = uj.employerId
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
    userExist,
    genderStatsByDegreeTitle,
    allUserDataByDegreeTitle,
};
