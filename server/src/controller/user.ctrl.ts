import { Request, Response } from "express";

import User from '../models/user';
import Role from '../models/role';
import Country from '../models/country';
import Language from '../models/language';

import { generateToken, generateCode, hashCode, compareCode } from "../helper/encrypt";

import { default_role } from "../config/config";

export const users = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showUsers = await User.find().limit(10).select("-code")

        return res.status(200).json(showUsers)

    } catch (error) {
        throw error
    }

}

export const user = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const showUser = await User.findById(id).select("-code")

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

        const hashedCode = await hashCode(code)

        const newUser = new User({
            nickname,
            code: hashedCode,
            role: roleUser._id,
            country: country._id,
            language: language._id
        })

        await newUser.save()

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

        const newUser = new User({
            nickname: `user${generateCode(6)}`,
            code: hashCode(generateCode(10)),
            role: role._id,
            country: country._id,
            language: language._id
        })

        const user = await newUser.save()

        const token: string = generateToken(user._id)

        const userRegistered = await User.findById(user._id).select("-code")

        if (!userRegistered) {
            return res.status(400).json({ message: "User does not exists" })
        }

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

        const user = await User.findById(id).select("-code")

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

        const userLogged = await User.findById(user._id).select("-code")

        if(!userLogged) {
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