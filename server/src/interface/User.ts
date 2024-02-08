import { Document, Types } from "mongoose";

export interface IUser extends Document {
    _id: Types.ObjectId;
    nickname: string;
    code: string;
    statistics: Types.ObjectId[];
    role: Types.ObjectId;
    points: Types.ObjectId;
    amountOptions: number;
    amountQuestions: number;
    country: Types.ObjectId;
    language: Types.ObjectId;
    isRegistered: boolean;
    helps: number;
    isImage: boolean;
    isSounds: boolean;
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
    category: Types.ObjectId;
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
    flag: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

export interface IExperience extends Document {
    _id: Types.ObjectId;
    day: number;
    month: number;
    year: number;
    total: number;
    user: Types.ObjectId;
    bestPuntuation: number;
    lastGame: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

export interface ILanguage extends Document {
    _id: Types.ObjectId;
    language: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}