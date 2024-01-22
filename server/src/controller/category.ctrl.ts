import { Request, Response } from 'express';

import Category from '../models/category';

export const categories = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showCategories = await Category.find()

        return res.status(200).json(showCategories)

    } catch (error) {
        throw error
    }

}

export const createCategory = async (req: Request, res: Response): Promise<Response> => {

    const { category } = req.body

    try {

        const newCategory = new Category({
            category
        })

        await newCategory.save()

        return res.status(200).json({ message: "Category created successfully" })

    } catch (error) {
        throw error
    }

}