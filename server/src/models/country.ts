import { Schema, model } from "mongoose";

import { ICountry } from "../interface/User";

const countrySchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    flag: {
        type: String,
        default: "https://res.cloudinary.com/projects-emanuek/image/upload/v1706184369/ninguno_y4m7bi.png"
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<ICountry>('Country', countrySchema)