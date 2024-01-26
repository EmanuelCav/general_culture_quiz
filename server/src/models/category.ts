import { Schema, model } from "mongoose";

import { ICategory } from "../interface/Question";

const categorySchema = new Schema({

    category: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    icon: {
        type: String,
        required: true,
        trim: true
    },

    colorActive: {
        type: String,
        required: true,
        trim: true
    },

    colorInactive: {
        type: String,
        required: true,
        trim: true
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<ICategory>('Category', categorySchema)