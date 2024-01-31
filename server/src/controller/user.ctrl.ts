import { Request, Response } from "express";

import User from '../models/user';
import Role from '../models/role';
import Country from '../models/country';
import Language from '../models/language';
import Statistic from '../models/statistic';
import Category from '../models/category';
import Experience from '../models/experience';

import { generateToken, generateCode, hashCode, compareCode } from "../helper/encrypt";

import { default_role } from "../config/config";

export const users = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showUsers = await User.find().select("-code")

        return res.status(200).json(showUsers)

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

        return res.status(200).json(showUser)

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
            }).select("-code")

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
            .select("-code")

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
            }).select("-code")

        }

        const newExperience = new Experience({
            user: req.user
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
            return res.status(400).json({ message: "Fields do not match" })
        }

        const isCodeValid = await compareCode(code, user.code)

        if (!isCodeValid) {
            return res.status(400).json({ message: "Fields do not match" })
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