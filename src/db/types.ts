import {
    MEXICAN_STATES,
    STUDY_LEVEL_NAMES,
    LABORAL_SITUATION,
    USER_GENDER,
} from './constants';
// manually done :/

const USER_GENDER_SET = new Set(Object.keys(USER_GENDER));
export const isUserGenderTypeGuard = (
    userGender: string
): userGender is UserGender => USER_GENDER_SET.has(userGender);
export type UserGender = keyof typeof USER_GENDER;

export type User = {
    id: string;
    createdAt: string;
    gender: UserGender;
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

export type MexicanStates = keyof typeof MEXICAN_STATES;
const MEXICAN_STATES_SET = new Set(Object.keys(MEXICAN_STATES));
export const isMexicanStateTypeGuard = (
    mexicanState: string
): mexicanState is MexicanStates => MEXICAN_STATES_SET.has(mexicanState);

export type LaboralSituation = keyof typeof LABORAL_SITUATION;
const LABORAL_SITUATION_SET = new Set(Object.keys(LABORAL_SITUATION));
export const isLaboralSituationTypeGuard = (
    laboralSituation: string
): laboralSituation is LaboralSituation =>
    LABORAL_SITUATION_SET.has(laboralSituation);

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

export type MonitoringRequestName =
    | 'home_page'
    | 'user_api'
    | 'stats_api'
    | 'options_api';
export type MonitoringRequestMethod = 'get' | 'post';
export type MonitoringRequestStatus = 'error' | 'ok';
// TODOn fisnish this
// TODO how errors are susually handled in express? via a common middleware?
// how are those usually logged? in the point?
export type MonitoringRequest = {
    id: string;
    createdAt: string;
    counterName: MonitoringRequestName;
    requestStatus: MonitoringRequestStatus;
    requestMethod: MonitoringRequestMethod;
    data?: string;
};
