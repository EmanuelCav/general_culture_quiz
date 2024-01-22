import { Document } from "mongoose";

import { ICategory } from "./Question";

export interface IUser extends Document {
    _id: string;
    nickname: string;
    code: string;
    statistics: IStatistic[];
    role: IRole;
    points: IExperience;
    amountOptions: number;
    amountQuestions: number;
    country: ICountry;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

export interface IRole extends Document {
    _id: string;
    role: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

export interface IStatistic extends Document {
    _id: string;
    category: ICategory;
    questions: number;
    corrects: number;
    user: IUser;
    isSelect: boolean;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

export interface ICountry extends Document {
    _id: string;
    name: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

export interface IExperience extends Document {
    _id: string;
    day: number;
    month: number;
    year: number;
    total: number;
    user: IUser;
    bestPuntuation: Number;
    lastGame: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} 