import { ICateogory } from "./Game";

export interface IUserReducer {
    users: IUsersRanking;
    isLoggedIn: boolean;
    user: IUserInfo;
    profile: IUser;
}

export interface IUserInfo {
    token?: string;
    user?: IUser;
}

export interface IUsersRanking {
    total?: IUser[];
    ranking?: IUser[];
    countries?: ICountryRank[];
}

export interface IUser {
    _id?: string;
    nickname?: string;
    statistics?: IStatistic[];
    amountOptions?: number;
    amountQuestions?: number;
    country?: ICountry;
    language?: ILanguage;
    points?: IPoints;
    helps?: number;
    isImage?: boolean;
    isSounds?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface IPoints {
    _id: string;
    day: number;
    month: number;
    year: number;
    total: number;
    user: string;
    bestPuntuation: number;
    lastGame: string;
    createdAt: string;
    updatedAt: string;
}

export interface IStatistic {
    _id: string;
    corrects: number;
    questions: number;
    category: ICateogory;
    isSelect: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ICountry {
    _id: string;
    name: string;
    flag: string;
    createdAt: string;
    updatedAt: string;
}

export interface ILanguage {
    _id: string;
    language: string;
    createdAt: string;
    updatedAt: string;
}

export interface IOptionUser {
    amountQuestions: number;
    amountOptions: number;
}

export interface IAuthLoginData {
    nickname: string;
    code: string;
}

export interface IPointsData {
    points: number
}

export interface ICountryRank {
    _id: string;
    flag: string;
    points: number;
}
