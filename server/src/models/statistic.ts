import { Schema, model, Types } from "mongoose";

import { IStatistic } from "../interface/User";

const statisticSchema = new Schema({

    category: {
        type: Types.ObjectId,
        ref: 'Category'
    },

    questions: {
        type: Number,
        default: 0
    },

    corrects: {
        type: Number,
        default: 0
    },

    user: {
        type: Types.ObjectId,
        ref: 'User'
    },

    isSelect: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true,
    versionKey: false
}) 

export default model<IStatistic>('Statistic', statisticSchema)