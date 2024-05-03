import { Router } from 'express';
import { z } from 'zod';

import { validateReq } from '../reqValidation';
import { HTTP_CODES } from '../../utils';

import DegreeTitleModel from '../../db/models/DegreeTitleModel';
import EmployerModel from '../../db/models/EmployerModel';
import InstitutionModel from '../../db/models/InstitutionModel';
import LaboralAreaModel from '../../db/models/LaboralAreaModel';
import LaboralAreaPositionModel from '../../db/models/LaboralAreaPositionModel';
import UserDegreeModel from '../../db/models/UserDegreeModel';
import UserJobModel from '../../db/models/UserJobModel';
import UserModel from '../../db/models/UserModel';

const router = Router();

const UserGenderSchema = z.union([
    z.literal('male'),
    z.literal('female'),
    z.literal('other'),
]);

const DegreeLevelSchema = z.union([
    z.literal('tsu'),
    z.literal('lic'),
    z.literal('msc'),
    z.literal('phd'),
]);

const LaboralSituationSchema = z.union([
    z.literal('full'),
    z.literal('mid'),
    z.literal('independent'),
    z.literal('autoemployment'),
]);

const MexicanStatesSchema = z.union([
    z.literal('ags'),
    z.literal('baja'),
    z.literal('bajaSur'),
    z.literal('camp'),
    z.literal('chia'),
    z.literal('chi'),
    z.literal('cdmx'),
    z.literal('coah'),
    z.literal('col'),
    z.literal('dur'),
    z.literal('gto'),
    z.literal('gro'),
    z.literal('hgo'),
    z.literal('jal'),
    z.literal('edomex'),
    z.literal('mich'),
    z.literal('mor'),
    z.literal('nay'),
    z.literal('nvoLeon'),
    z.literal('oax'),
    z.literal('pue'),
    z.literal('qro'),
    z.literal('qroo'),
    z.literal('slp'),
    z.literal('sin'),
    z.literal('son'),
    z.literal('tab'),
    z.literal('tamps'),
    z.literal('tlax'),
    z.literal('ver'),
    z.literal('yuc'),
    z.literal('zac'),
]);

const currentYear = new Date().getFullYear();

const MAX_STRING_LENGTH = 150;

const UserDegreeSchema = z.object({
    degree: DegreeLevelSchema,
    title: z.string().min(2).max(MAX_STRING_LENGTH),
    institution: z.string().min(2).max(MAX_STRING_LENGTH),
    startYear: z.number().min(1910).max(currentYear).int(),
    isJobRelated: z.boolean(),
});

const UserJobSchema = z.object({
    laboralSituation: LaboralSituationSchema,
    salary: z.number().min(100),
    employer: z.string().min(2).max(MAX_STRING_LENGTH),
    laboralArea: z.string().min(2).max(MAX_STRING_LENGTH),
    position: z.string().min(2).max(MAX_STRING_LENGTH),
    yearsOfExperience: z.number().min(0).max(60).int(),
    mexicanState: MexicanStatesSchema,
});

// TODO need to add userId obtained from the Frontend somehow??
const PostUserInfoSchema = z.object({
    body: z.object({
        gender: UserGenderSchema,
        degrees: z.array(UserDegreeSchema).min(1).max(6),
        job: UserJobSchema,
    }),
});

router.post('/', async (req, res, next) => {
    try {
        const cleanReq = await validateReq(PostUserInfoSchema, req);

        const externalUserId = 'oaisd'; // TODO update this to something better :/

        const { gender, degrees, job } = cleanReq.body;

        const createdUser = await UserModel.create({
            externalId: externalUserId,
            gender,
        });

        const createdEmployer = await EmployerModel.createIfNotExists({
            name: job.employer,
        });
        const createdLaboralArea = await LaboralAreaModel.createIfNotExists({
            name: job.laboralArea,
        });
        const createdLaboralAreaPosition =
            await LaboralAreaPositionModel.createIfNotExists({
                laboralAreaId: createdLaboralArea.id,
                name: job.position,
            });
        const createdUserJobModel = await UserJobModel.create({
            userId: createdUser.id,
            laboralSituation: job.laboralSituation,
            salary: job.salary,
            employerId: createdEmployer.id,
            laboralAreaId: createdLaboralArea.id,
            laboralAreaPositionId: createdLaboralAreaPosition.id,
            yearsOfExperience: job.yearsOfExperience,
            mexicanState: job.mexicanState,
        });

        const createdDegrees = await Promise.all(
            degrees.map(async (degreeItem) => {
                const createdInstitution =
                    await InstitutionModel.createIfNotExists({
                        name: degreeItem.institution,
                    });
                const createdDegreeTitle =
                    await DegreeTitleModel.createIfNotExists({
                        name: degreeItem.title,
                    });

                const degreeData = {
                    userId: createdUser.id,
                    degree: degreeItem.degree,
                    titleId: createdDegreeTitle.id,
                    institutionId: createdInstitution.id,
                    startYear: degreeItem.startYear,
                    isJobRelated: degreeItem.isJobRelated, // TODO update this, this should point to an specific job item. Maybe update this to be mainJobId. Also related vs helped to get there...
                };

                await UserDegreeModel.create(degreeData);

                return degreeData;
            })
        );
    } catch (err) {
        next(err);
    }
});

export default router;
