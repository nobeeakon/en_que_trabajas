import { Router } from 'express';
import { z } from 'zod';

import { validateReq } from '../reqValidation';

import DegreeTitleModel from '../../db/models/DegreeTitleModel';
import EmployerModel from '../../db/models/EmployerModel';
import InstitutionModel from '../../db/models/InstitutionModel';
import LaboralAreaModel from '../../db/models/LaboralAreaModel';
import LaboralAreaPositionModel from '../../db/models/LaboralAreaPositionModel';
import { isDegreeLevelTypeGuard } from '../../db/types';
import MonitoringRequestModel from '../../db/models/MonitoringRequestModel';

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

router.get('/', async (req, res, next) => {
    try {
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
            await MonitoringRequestModel.create({
                counterName: 'options_api',
                requestMethod: 'get',
                requestStatus: 'ok',
            });
            return res.json(defaultResponse);
        }

        let cleanData: { name: string; normalizedName?: string }[] = [];
        switch (queryType) {
            case 'degreeTitle': {
                if (
                    typeof degreeLevel !== 'string' ||
                    !isDegreeLevelTypeGuard(degreeLevel)
                ) {
                    return res.json(defaultResponse);
                }
                const data = await DegreeTitleModel.getByDegreeLevelAndLikeName(
                    {
                        name: value,
                        degreeLevel,
                    }
                );

                cleanData = data.records.map((degreeItem) => ({
                    name: degreeItem.name,
                    normalizedName: degreeItem.normalizedName,
                }));
                break;
            }
            case 'institution': {
                const data = await InstitutionModel.getLikeName({
                    name: value,
                });
                cleanData = data.records.map((institutionItem) => ({
                    name: institutionItem.name,
                }));
                break;
            }
            case 'employer': {
                const data = await EmployerModel.getLikeName({ name: value });
                cleanData = data.records.map((institutionItem) => ({
                    name: institutionItem.name,
                }));
                break;
            }
            case 'laboralArea': {
                const data = await LaboralAreaModel.getLikeName({
                    name: value,
                });
                cleanData = data.records.map((institutionItem) => ({
                    name: institutionItem.name,
                }));
                break;
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
                cleanData = data.records.map((institutionItem) => ({
                    name: institutionItem.name,
                }));
                break;
            }
            default:
                break;
        }

        await MonitoringRequestModel.create({
            counterName: 'options_api',
            requestMethod: 'get',
            requestStatus: 'ok',
            data: queryType,
        });
        return res.json({ records: cleanData });
    } catch (error) {
        await MonitoringRequestModel.create({
            counterName: 'options_api',
            requestMethod: 'get',
            requestStatus: 'error',
            data: String(error),
        });
        next(error);
    }
});

export default router;
