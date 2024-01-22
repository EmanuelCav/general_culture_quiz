import { Request, Response } from 'express';

import Language from '../models/language';

export const languages = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showLanguages = await Language.find()

        return res.status(200).json(showLanguages)

    } catch (error) {
        throw error
    }

}

export const createLanguages = async (req: Request, res: Response): Promise<Response> => {

    const { language } = req.body

    try {

        const newLanguage = new Language({
            language
        })

        await newLanguage.save()

        return res.status(200).json({ message: "Language created successfully" })

    } catch (error) {
        throw error
    }

}