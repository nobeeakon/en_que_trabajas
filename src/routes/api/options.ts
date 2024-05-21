import { Router } from 'express';
import { z } from 'zod';

import { validateReq } from '../reqValidation';

import DegreeTitleModel from '../../db/models/DegreeTitleModel';
import EmployerModel from '../../db/models/EmployerModel';
import InstitutionModel from '../../db/models/InstitutionModel';
import LaboralAreaModel from '../../db/models/LaboralAreaModel';
import LaboralAreaPositionModel from '../../db/models/LaboralAreaPositionModel';
import { isDegreeLevelTypeGuard } from '../../db/types';

const router = Router();

type OptionType =
    | 'degreeTitle'
    | 'institution'
    | 'employer'
    | 'laboralArea'
    | 'laboralAreaPosition';
const OptionTypeSet = new Set<OptionType>([
    'degreeTitle',
    'institution',
    'employer',
    'laboralArea',
    'laboralAreaPosition',
]);

const isOptionTypeTypeGuard = (
    optionString: string
): optionString is OptionType =>
    (OptionTypeSet as Set<string>).has(optionString);

router.get('/', async (req, res) => {
    const queryType = req.query?.type ?? '';
    const value = req.query?.value ?? '';
    const degreeLevel = req.query?.degreeLevel ?? '';

    const defaultResponse = { records: [] };

    if (
        (!!value && typeof value !== 'string') ||
        value.length < 3 ||
        typeof queryType !== 'string' ||
        !isOptionTypeTypeGuard(queryType)
    ) {
        return res.json(defaultResponse);
    }

    switch (queryType) {
        case 'degreeTitle': {
            if (
                typeof degreeLevel !== 'string' ||
                !isDegreeLevelTypeGuard(degreeLevel)
            ) {
                return res.json(defaultResponse);
            }
            const data = await DegreeTitleModel.getByDegreeLevelAndLikeName({
                name: value,
                degreeLevel,
            });

            const cleanData = data.records.map((degreeItem) => ({
                name: degreeItem.name,
            }));

            return res.json({ records: cleanData });
        }
        case 'institution': {
            const data = await InstitutionModel.getLikeName({ name: value });
            const cleanData = data.records.map((institutionItem) => ({
                name: institutionItem.name,
            }));

            return res.json({ records: cleanData });
        }
        case 'employer': {
            const data = await EmployerModel.getLikeName({ name: value });
            const cleanData = data.records.map((institutionItem) => ({
                name: institutionItem.name,
            }));

            return res.json({ records: cleanData });
        }
        case 'laboralArea': {
            const data = await LaboralAreaModel.getLikeName({ name: value });
            const cleanData = data.records.map((institutionItem) => ({
                name: institutionItem.name,
            }));

            return res.json({ records: cleanData });
        }
        case 'laboralAreaPosition': {
            const laboralAreas = await LaboralAreaModel.getByName({
                name: value,
            });

            if (laboralAreas.records.length !== 1) {
                return res.json(defaultResponse);
            }

            const targetLaboralArea = laboralAreas.records[0];

            const data = await LaboralAreaPositionModel.getByLaborAreaId({
                laboralAreaId: targetLaboralArea.id,
            });
            const cleanData = data.records.map((institutionItem) => ({
                name: institutionItem.name,
            }));

            return res.json({ records: cleanData });
        }
        default:
            return res.json(defaultResponse);
    }
});

export default router;
