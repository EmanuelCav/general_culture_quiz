import { Schema, model } from "mongoose";

import { ICountry } from "../interface/User";

const countrySchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<ICountry>('Country', countrySchema)