import { Schema, model, Types } from "mongoose";

import { IGame } from "../interface/Question";

const gameSchema = new Schema({

    questions: [{
        type: Types.ObjectId,
        ref: 'Question'
    }],

    corrects: {
        type: Number,
        default: 0
    },

    user: {
        type: Types.ObjectId,
        ref: 'User'
    },

    category: {
        type: Types.ObjectId,
        ref: 'Category'
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<IGame>('Game', gameSchema)