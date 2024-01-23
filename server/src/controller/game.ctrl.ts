import { Request, Response } from 'express';

import Game from '../models/game';
import Category from '../models/category';

import User from '../models/user';

export const games = async (req: Request, res: Response) => {

    try {

        const showGames = await Game.find({ user: req.user })

        return res.status(200).json(showGames)
        
    } catch (error) {
        throw error
    }

}

export const gamesCategory = async (req: Request, res: Response) => {

    const { id } = req.params

    try {

        const category = await Category.findById(id)

        if(!category) {
            return res.status(400).json({ message: "Category does not exists" })
        }

        const showGames = await Game.find({ user: req.user, category: id })

        return res.status(200).json(showGames)
        
    } catch (error) {
        throw error
    }

}

export const generateGame = async (req: Request, res: Response) => {

    const { id } = req.params

    try {

        const category = await Category.findById(id)

        if(!category) {
            return res.status(400).json({ message: "Category does not exists" })
        }

        const user = await User.findById(req.user)

        if(!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const newGame = new Game({
            user: req.user,
            category: id
        })

        await newGame.save()

        return res.status(200).json({ message: "Game generated" })
        
    } catch (error) {
        throw error
    }

}