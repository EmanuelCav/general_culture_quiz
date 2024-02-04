import { Request, Response } from "express";

import Statistic from '../models/statistic'
import User from '../models/user'

export const selectCategory = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const statistic = await Statistic.findById(id)

        if (!statistic) {
            return res.status(400).json({ message: "Statistic does not exists" })
        }

        await Statistic.findByIdAndUpdate(id, {
            isSelect: !statistic.isSelect
        }, {
            new: true
        })

        const user = await User.findById(req.user)
            .select("-code -role")
            .populate({
                path: "statistics",
                populate: {
                    path: "category"
                }
            })
            .populate("country")
            .populate("language")
            .populate("points")

        return res.status(200).json(user)

    } catch (error) {
        throw error
    }

}

export const changeAllCategory = async (req: Request, res: Response): Promise<Response> => {

    const { query } = req.query

    try {    

        await Statistic.updateMany(
            {
                user: req.user
            },
            {
                isSelect: query === 'true' ? true : false
            })

        const user = await User.findById(req.user)
            .select("-code -role")
            .populate({
                path: "statistics",
                populate: {
                    path: "category"
                }
            })
            .populate("country")
            .populate("language")
            .populate("points")

        return res.status(200).json(user)

    } catch (error) {
        throw error
    }

} 