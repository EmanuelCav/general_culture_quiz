import { Schema, Model } from "mongoose";

const userSchema = new Schema({

    nickname: {
        type: String,
        trim: true
    }

}, {
    timestamps: true,
    versionKey: false
})