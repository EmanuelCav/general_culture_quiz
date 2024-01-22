import { Request, Response } from 'express';

import Country from '../models/country';

export const countries = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showCountries = await Country.find()

        return res.status(200).json(showCountries)

    } catch (error) {
        throw error
    }

}

export const createCountry = async (req: Request, res: Response): Promise<Response> => {

    const { name } = req.body

    try {

        const newCategory = new Country({
            name
        })

        await newCategory.save()

        return res.status(200).json({ message: "Country created successfully" })

    } catch (error) {
        throw error
    }

}