import { Schema, model, Types } from "mongoose";

import { IUser } from "../interface/User";

const userSchema = new Schema({

    nickname: {
        type: String,
        trim: true,
        unique: true
    },

    code: {
        type: String,
        trim: true
    },

    statistics: [{
        type: Types.ObjectId,
        ref: 'Statistic'
    }],

    role: {
        type: Types.ObjectId,
        ref: 'Role'
    },

    points: {
        type: Types.ObjectId,
        ref: 'Experience'
    },

    amountOptions: {
        type: Number,
        default: 4
    },

    amountQuestions: {
        type: Number,
        default: 10
    },

    country: {
        type: Types.ObjectId,
        ref: 'Country'
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<IUser>('User', userSchema)