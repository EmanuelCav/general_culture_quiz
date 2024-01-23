import { Document, Types } from "mongoose";

export interface ICategory extends Document {
    _id: Types.ObjectId;
    category: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

export interface IGame extends Document {
    _id: Types.ObjectId;
    questions: Types.ObjectId[];
    corrects: number;
    user: Types.ObjectId;
    category: Types.ObjectId;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

export interface IQuestion extends Document {
    _id: Types.ObjectId;
    image: Types.ObjectId;
    question: string;
    options: Types.ObjectId[];
    answer: string;
    category: Types.ObjectId;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

export interface IImage extends Document {
    _id: Types.ObjectId;
    image: string;
    imageId: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}
