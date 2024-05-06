import { ESTADOS, STUDY_LEVEL_NAMES, LABORAL_SITUATION } from './constants';
// manually done :/

export type User = {
    id: string;
    createdAt: string;
    gender: string;
    externalId: string;
};

export type Institution = {
    id: string;
    createdAt: string;
    name: string;
    normalizedName: string;
};

export type DegreeLevel = keyof typeof STUDY_LEVEL_NAMES;

const STUDY_LEVEL_SET = new Set(Object.keys(STUDY_LEVEL_NAMES));
export const isDegreeLevelTypeGuard = (
    degreeLevel: string
): degreeLevel is DegreeLevel => STUDY_LEVEL_SET.has(degreeLevel);

export type DegreeTitle = {
    id: string;
    createdAt: string;
    name: string;
    normalizedName: string;
    degreeLevel: DegreeLevel;
};

export type Employer = {
    id: string;
    createdAt: string;
    name: string;
    normalizedName: string;
};

export type LaboralArea = {
    id: string;
    createdAt: string;
    name: string;
    normalizedName: string;
};

export type LaboralAreaPosition = {
    id: string;
    createdAt: string;
    name: string;
    normalizedName: string;
    laboralAreaId: string;
};

export type UserDegree = {
    id: string;
    createdAt: string;
    userId: string;
    titleId: string;
    institutionId: string;
    startYear: number;
    mainUserJobId?: string;
};

export type MexicanStates = keyof typeof ESTADOS;
export type LaboralSituation = (typeof LABORAL_SITUATION)[number]['id'];

export type UserJob = {
    id: string;
    createdAt: string;
    userId: string;
    laboralSituation: LaboralSituation;
    salary: number;
    employerId: string;
    laboralAreaId: string;
    laboralAreaPositionId: string;
    yearsOfExperience: number;
    mexicanState?: MexicanStates;
};
