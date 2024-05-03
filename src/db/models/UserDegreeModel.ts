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
    isJobRelated,
}: Pick<
    UserDegree,
    | 'userId'
    | 'degree'
    | 'titleId'
    | 'institutionId'
    | 'startYear'
    | 'isJobRelated'
>) => {
    const db = await openDb();
    const id = uuid();
    const createdAt = getDateISOString();

    await db.run(
        `
        INSERT INTO ${TABLE_NAMES.userDegree}(id, createdAt, userId, degree, titleId, institutionId, startYear, isJobRelated) 
            VALUES(:id, :createdAt, :userId, :degree, :titleId, :institutionId, :startYear, :isJobRelated)
    `,
        {
            ':id': id,
            ':createdAt': createdAt,
            ':userId': userId,
            ':degree': degree,
            ':titleId': titleId,
            ':institutionId': institutionId,
            ':startYear': startYear,
            ':isJobRelated': isJobRelated,
        }
    );

    return { id };
};

export default {
    create,
};
