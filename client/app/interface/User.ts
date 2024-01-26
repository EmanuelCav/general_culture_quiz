import { ICateogory } from "./Game";

export interface IUserReducer {
    isLoggedIn: boolean;
    user: IUserInfo;
    profile: IUser;
}

export interface IUserInfo {
    token?: string;
    user?: IUser;
}

export interface IUser {
    _id?: string;
    nickname?: string;
    statistics?: IStatistic[];
    amountOptions?: number;
    amountQuestions?: number;
    country?: ICountry;
    language?: ILanguage;
    helps?: number;
    createdAt?: string;
    updatedAt?: string;
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
    amountQuestions?: number;
    amountOptions?: number;
}