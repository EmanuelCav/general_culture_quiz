import { Request, Response } from "express";

import User from '../models/user';

import { generateToken, generateUserNumber } from "../helper/encrypt";

export const users = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showUsers = await User.find().limit(10)

        return res.status(200).json(showUsers)

    } catch (error) {
        throw error
    }

}

export const user = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const showUser = await User.findById(id)

        return res.status(200).json(showUser)

    } catch (error) {
        throw error
    }

}

export const createUser = async (req: Request, res: Response): Promise<Response> => {

    const { nickname, code } = req.body

    try {

        const newUser = new User({
            nickname,
            code
        })

        await newUser.save()

        return res.status(200).json({ message: "User generated successfully" })

    } catch (error) {
        throw error
    }

}


export const firstTime = async (req: Request, res: Response): Promise<Response> => {

    try {

        const newUser = new User({
            nickname: `user${generateUserNumber()}`
        })

        const user = await newUser.save()

        const token: string = generateToken(user._id)

        return res.status(200).json({
            user,
            token
        })

    } catch (error) {
        throw error
    }

}

export const login = async (req: Request, res: Response): Promise<Response> => {

    const { nickname } = req.body

    try {

        const user = await User.findOne({ nickname })

        if(!user) {
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

export const removeUser = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "removeUser" })

    } catch (error) {
        throw error
    }

}