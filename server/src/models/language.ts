import { Schema, model } from "mongoose";

import { ILanguage } from "../interface/User";

const languageSchema = new Schema({

    language: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<ILanguage>('Language', languageSchema)