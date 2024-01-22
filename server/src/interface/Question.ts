import { Document, Types } from "mongoose";

export interface ICategory extends Document {
    _id: Types.ObjectId;
    category: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}
