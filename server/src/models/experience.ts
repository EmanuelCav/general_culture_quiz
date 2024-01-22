import { Schema, model, Types } from "mongoose";

import { IExperience } from "../interface/User";

const experienceSchema = new Schema({

    day: {
        type: Number,
        default: 0
    },

    month: {
        type: Number,
        default: 0
    },

    year: {
        type: Number,
        default: 0
    },

    total: {
        type: Number,
        default: 0
    },

    user: {
        type: Types.ObjectId,
        ref: 'User'
    },

    bestPuntuation: {
        type: Number,
        default: 0
    },

    lastGame: {
        type: String,
        trim: true
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<IExperience>('Experience', experienceSchema)