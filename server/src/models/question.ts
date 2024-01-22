import { Schema, model, Types } from "mongoose";

import { IQuestion } from "../interface/Question";

const questionSchema = new Schema({

    question: {
        type: String,
        required: true,
        trim: true
    },

    image: {
        type: Types.ObjectId,
        ref: 'Image'
    },

    options: [{
        type: Types.ObjectId,
        ref: 'Option'
    }],

    answer: {
        type: String,
        required: true,
    },

    category: {
        type: Types.ObjectId,
        ref: 'Category'
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<IQuestion>('Question', questionSchema)