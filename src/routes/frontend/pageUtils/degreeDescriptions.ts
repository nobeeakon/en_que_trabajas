import type { DegreeLevel } from '../../../db/types';

export const getDegreeDescription = ({
    degreeLevel,
    normalizedDegreeName,
}: {
    degreeLevel: DegreeLevel;
    normalizedDegreeName: string;
}): string[] | undefined => {
    switch (degreeLevel) {
        case 'lic':
            return licDescriptionsByNormalizedName[normalizedDegreeName];
        default:
            return undefined;
    }
};

const licDescriptionsByNormalizedName: Record<string, string[]> = {
    ingenieriacivil: ['hola', 'hola'],
};
