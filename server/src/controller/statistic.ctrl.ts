import { Request, Response } from "express";

import Statistic from '../models/statistic'
import User from '../models/user'
import Game from '../models/game'

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

export const countCategory = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const statistic = await Statistic.findById(id)

        if (!statistic) {
            return res.status(400).json({ message: "Statistic does not exists" })
        }

        await Statistic.findByIdAndUpdate(id, {
            questions: statistic.questions + 1
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

export const correctCategory = async (req: Request, res: Response): Promise<Response> => {

    const { id, gid } = req.params

    try {

        const statistic = await Statistic.findById(id)

        if (!statistic) {
            return res.status(400).json({ message: "Statistic does not exists" })
        }

        const game = await Game.findById(gid)

        if(!game) {
            return res.status(400).json({ message: "Game does not exists" })
        }

        await Statistic.findByIdAndUpdate(id, {
            corrects: statistic.corrects + 1
        }, {
            new: true
        })

        await Game.findByIdAndUpdate(gid, {
            corrects: game.corrects + 1
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