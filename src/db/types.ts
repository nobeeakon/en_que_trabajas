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
};

export type DegreeTitle = {
    id: string;
    createdAt: string;
    name: string;
};

export type Employer = {
    id: string;
    createdAt: string;
    name: string;
};

export type LaboralArea = {
    id: string;
    createdAt: string;
    name: string;
};

export type LaboralAreaPosition = {
    id: string;
    createdAt: string;
    name: string;
    laboralAreaId: string;
};

export type DegreeLevel = keyof typeof STUDY_LEVEL_NAMES;

export type UserDegree = {
    id: string;
    createdAt: string;
    userId: string;
    degree: DegreeLevel;
    titleId: string;
    institutionId: string;
    startYear: number;
    isJobRelated: boolean;
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
    laboralAreaId: boolean;
    laboralAreaPositionId: boolean;
    yearsOfExperience: number;
    mexicanState?: MexicanStates;
};
