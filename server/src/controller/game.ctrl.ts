import { Request, Response } from 'express';

import Game from '../models/game';
import Statistic from '../models/statistic';

import User from '../models/user';

export const games = async (req: Request, res: Response) => {

    try {

        const showGames = await Game.find({ user: req.user })

        return res.status(200).json(showGames)
        
    } catch (error) {
        throw error
    }

}

export const generateGame = async (req: Request, res: Response) => {

    try {

        const user = await User.findById(req.user).select("-code")

        if(!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const statistic = await Statistic.find({ user: req.user, isSelect: true })

        if(statistic.length === 0) {
            return res.status(400).json({ message: "Select categories to start" })
        }

        let categories = []

        for (let i = 0; i < statistic.length; i++) {
            categories.push(statistic[i]._id)
        }

        const newGame = new Game({
            user: req.user,
            categories
        })

        const gameSaved = await newGame.save()

        return res.status(200).json(gameSaved)
        
    } catch (error) {
        throw error
    }

}