import { Schema, model, Types } from "mongoose";

import { IOption } from "../interface/Question";

const optionSchema = new Schema({

    option: {
        type: String,
        required: true,
        trim: true,
    },

    question: {
        type: Types.ObjectId,
        ref: 'Question'
    },

    category: {
        type: Types.ObjectId,
        ref: 'Category'
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<IOption>('Option', optionSchema)