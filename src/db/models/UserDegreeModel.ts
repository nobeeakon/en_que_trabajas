import { uuid } from 'uuidv4';
import type { UserDegree } from '../types';
import { openDb } from '../dbClient';
import { getDateISOString } from '../utils';
import { TABLE_NAMES } from '../constants';

const create = async ({
    userId,
    degree,
    titleId,
    institutionId,
    startYear,
    mainUserJobId,
}: Pick<
    UserDegree,
    | 'userId'
    | 'degree'
    | 'titleId'
    | 'institutionId'
    | 'startYear'
    | 'mainUserJobId'
>) => {
    const db = await openDb();
    const id = uuid();
    const createdAt = getDateISOString();

    await db.run(
        `
        INSERT INTO ${TABLE_NAMES.userDegree}(id, createdAt, userId, degree, titleId, institutionId, startYear, mainUserJobId) 
            VALUES(:id, :createdAt, :userId, :degree, :titleId, :institutionId, :startYear, :mainUserJobId)
    `,
        {
            ':id': id,
            ':createdAt': createdAt,
            ':userId': userId,
            ':degree': degree,
            ':titleId': titleId,
            ':institutionId': institutionId,
            ':startYear': startYear,
            ':mainUserJobId': mainUserJobId,
        }
    );

    return { id };
};

export default {
    create,
};
