import { Request, Response } from 'express';

import Country from '../models/country';

export const countries = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showCountries = await Country.find().sort("name")

        return res.status(200).json(showCountries)

    } catch (error) {
        throw error
    }

}

export const createCountry = async (req: Request, res: Response): Promise<Response> => {

    const { name, flag } = req.body

    try {

        const newCountry = new Country({
            name,
            flag
        })

        const countrySaved = await newCountry.save()

        return res.status(200).json(countrySaved)

    } catch (error) {
        throw error
    }

}

export const removeCountry = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    try {

        const country = await Country.findById(id)

        if (!country) {
            return res.status(400).json({ message: "Country does not exists" })
        }

        await Country.findByIdAndDelete(id)

        return res.status(200).json({ message: "Country removed successfully" })

    } catch (error) {
        throw error
    }

}

export const updateCountry = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;
    const { name } = req.body

    try {

        if (!name) {
            return res.status(400).json({ message: "There are empty fields" })
        }

        const country = await Country.findById(id)

        if (!country) {
            return res.status(400).json({ message: "Country does not exists" })
        }

        const countryUpdated = await Country.findByIdAndUpdate(id, {
            name
        }, {
            new: true
        })

        return res.status(200).json({
            message: "Country updated successfully",
            country: countryUpdated
        })

    } catch (error) {
        throw error
    }

}

