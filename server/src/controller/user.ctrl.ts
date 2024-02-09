import { Request, Response } from "express";

import User from '../models/user';
import Role from '../models/role';
import Country from '../models/country';
import Language from '../models/language';
import Statistic from '../models/statistic';
import Category from '../models/category';
import Experience from '../models/experience';
import Game from '../models/game';

import { generateToken, generateCode, hashCode, compareCode } from "../helper/encrypt";

import { default_role } from "../config/config";

export const users = async (req: Request, res: Response): Promise<Response> => {

    const { date } = req.params

    try {

        const totalUser = await User.aggregate([
            {
                $lookup: {
                    from: Experience.collection.name,
                    localField: 'points',
                    foreignField: '_id',
                    as: 'points'
                }
            },
            {
                $lookup: {
                    from: Country.collection.name,
                    localField: 'country',
                    foreignField: '_id',
                    as: 'country'
                }
            },
            {
                $unwind: {
                    path: "$points"
                }
            },
            {
                $unwind: {
                    path: "$country"
                }
            },
            {
                $sort: {
                    "points.total": -1
                }
            },
            {
                $project: { code: 0, isRegistered: 0, isImage: 0, helps: 0, role: 0, isSounds: 0, language: 0 }
            }
        ])

        const dateUser = await User.aggregate([
            {
                $lookup: {
                    from: Experience.collection.name,
                    localField: 'points',
                    foreignField: '_id',
                    as: 'points'
                }
            },
            {
                $lookup: {
                    from: Country.collection.name,
                    localField: 'country',
                    foreignField: '_id',
                    as: 'country'
                }
            },
            {
                $unwind: {
                    path: "$points"
                }
            },
            {
                $unwind: {
                    path: "$country"
                }
            },
            {
                $sort: {
                    [`points.${date}`]: -1
                }
            },
            {
                $match: {
                    [`points.${date}`]: {
                        $gt: 0
                    }
                }
            },
            {
                $project: { code: 0, isRegistered: 0, isImage: 0, helps: 0, role: 0, isSounds: 0, language: 0 }
            }
        ])

        return res.status(200).json({
            total: totalUser,
            ranking: dateUser
        })

    } catch (error) {
        throw error
    }

}

export const user = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const showUser = await User.findById(id)
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

        if (!showUser) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const games = await Game.find({ user: id })

        return res.status(200).json({
            user: showUser,
            games
        })

    } catch (error) {
        throw error
    }

}

export const createUser = async (req: Request, res: Response): Promise<Response> => {

    const { nickname, code, role } = req.body

    try {

        let roleUser

        if (role) {
            roleUser = await Role.findOne({ role })
        } else {
            roleUser = await Role.findOne({ role: `${default_role}` })
        }

        if (!roleUser) {
            return res.status(400).json({ message: "Role does not exists" })
        }

        const country = await Country.findOne({ name: "Not Specified" })

        if (!country) {
            return res.status(400).json({ message: "Country does noe exists" })
        }

        const language = await Language.findOne({ language: "Español" })

        if (!language) {
            return res.status(400).json({ message: "Language does noe exists" })
        }

        const categories = await Category.find()

        const hashedCode = await hashCode(code)

        const newUser = new User({
            nickname,
            code: hashedCode,
            role: roleUser._id,
            country: country._id,
            language: language._id
        })

        const user = await newUser.save()

        let statistic;

        for (let i = 0; i < categories.length; i++) {

            const newStatistic = new Statistic({
                user: user._id,
                category: categories[i]._id
            })

            statistic = await newStatistic.save()

            await User.findByIdAndUpdate(user._id, {
                $push: {
                    statistics: statistic._id
                }
            }, {
                new: true
            }).select("-code -role")

        }

        const newExperience = new Experience({
            user: req.user
        })

        const experienceSaved = await newExperience.save()

        await User.findByIdAndUpdate(user._id, {
            points: experienceSaved._id
        }, {
            new: true
        })
            .select("-code -role")

        return res.status(200).json({ message: "User generated successfully" })

    } catch (error) {
        throw error
    }

}


export const firstTime = async (req: Request, res: Response): Promise<Response> => {

    try {

        const role = await Role.findOne({ role: `${default_role}` })

        if (!role) {
            return res.status(400).json({ message: "Role does not exists" })
        }

        const country = await Country.findOne({ name: "Not Specified" })

        if (!country) {
            return res.status(400).json({ message: "Country does noe exists" })
        }

        const language = await Language.findOne({ language: "Español" })

        if (!language) {
            return res.status(400).json({ message: "Language does noe exists" })
        }

        const categories = await Category.find()

        const code = await hashCode(generateCode(10))

        const newUser = new User({
            nickname: `user${generateCode(6)}`,
            code,
            role: role._id,
            country: country._id,
            language: language._id
        })

        const user = await newUser.save()

        const token: string = generateToken(user._id)

        let statistic;

        for (let i = 0; i < categories.length; i++) {

            const newStatistic = new Statistic({
                user: user._id,
                category: categories[i]._id
            })

            statistic = await newStatistic.save()

            await User.findByIdAndUpdate(user._id, {
                $push: {
                    statistics: statistic._id
                }
            }, {
                new: true
            }).select("-code -role")

        }

        const newExperience = new Experience({
            user: user._id
        })

        const experienceSaved = await newExperience.save()

        const userRegistered = await User.findByIdAndUpdate(user._id, {
            points: experienceSaved._id
        }, {
            new: true
        })
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

        return res.status(200).json({
            user: userRegistered,
            token
        })

    } catch (error) {
        throw error
    }

}

export const login = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const user = await User.findById(id)
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

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const token: string = generateToken(user._id)

        return res.status(200).json({
            user,
            token
        })

    } catch (error) {
        throw error
    }

}

export const authLogin = async (req: Request, res: Response): Promise<Response> => {

    const { nickname, code } = req.body

    try {

        const user = await User.findOne({ nickname })

        if (!user) {
            return res.status(400).json({ message: "Los campos no coinciden" })
        }

        const isCodeValid = await compareCode(code, user.code)

        if (!isCodeValid) {
            return res.status(400).json({ message: "Los campos no coinciden" })
        }

        const token: string = generateToken(user._id)

        const userLogged = await User.findById(user._id)
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

        if (!userLogged) {
            return res.status(400).json({ message: "User does not exists" })
        }

        return res.status(200).json({
            user: userLogged,
            token
        })

    } catch (error) {
        throw error
    }

}

export const updateOptions = async (req: Request, res: Response): Promise<Response> => {

    const { amountOptions, amountQuestions } = req.body

    try {

        const user = await User.findById(req.user)

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const userUpdated = await User.findByIdAndUpdate(req.user, {
            amountOptions,
            amountQuestions
        }, {
            new: true
        })
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


        return res.status(200).json(userUpdated)

    } catch (error) {
        throw error
    }

}

export const removeUser = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const user = await User.findById(id)

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        await User.findByIdAndDelete(id)

        return res.status(200).json({ message: "User removed successfully" })

    } catch (error) {
        throw error
    }

}

export const changeIsImage = async (req: Request, res: Response): Promise<Response> => {

    try {

        const user = await User.findById(req.user)

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const userUpdated = await User.findByIdAndUpdate(req.user, {
            isImage: !user.isImage
        }, {
            new: true
        })
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

        return res.status(200).json(userUpdated)

    } catch (error) {
        throw error
    }

}

export const changeIsSound = async (req: Request, res: Response): Promise<Response> => {

    try {

        const user = await User.findById(req.user)

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const userUpdated = await User.findByIdAndUpdate(req.user, {
            isSounds: !user.isSounds
        }, {
            new: true
        })
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

        return res.status(200).json(userUpdated)

    } catch (error) {
        throw error
    }

}

export const registerUser = async (req: Request, res: Response): Promise<Response> => {

    const { nickname, code } = req.body

    try {

        const user = await User.findByIdAndUpdate(req.user, {
            nickname,
            code: await hashCode(code),
            isRegistered: true
        }, {
            new: true
        })
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

export const updateExperience = async (req: Request, res: Response): Promise<Response> => {

    const { points } = req.body

    try {

        const experience = await Experience.findOne({
            user: req.user
        })

        if (!experience) {
            return res.status(400).json({ message: "Experiece does not exists" })
        }

        await Experience.findByIdAndUpdate(experience._id, {
            bestPuntuation: points > experience.bestPuntuation ? points : experience.bestPuntuation,
            day: experience.day + points,
            month: experience.month + points,
            year: experience.year + points,
            total: experience.total + points,
            lastGame: new Date(new Date().setHours(new Date().getHours() - 3)).toISOString().split("T")[0]
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