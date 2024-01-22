import { Document, Types } from "mongoose";

import { ICategory } from "./Question";

export interface IUser extends Document {
    _id: Types.ObjectId;
    nickname: string;
    code: string;
    statistics: IStatistic[];
    role: Types.ObjectId;
    points: IExperience;
    amountOptions: number;
    amountQuestions: number;
    country: ICountry;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

export interface IRole extends Document {
    _id: Types.ObjectId;
    role: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

export interface IStatistic extends Document {
    _id: Types.ObjectId;
    category: ICategory;
    questions: number;
    corrects: number;
    user: IUser;
    isSelect: boolean;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

export interface ICountry extends Document {
    _id: Types.ObjectId;
    name: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

export interface IExperience extends Document {
    _id: Types.ObjectId;
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