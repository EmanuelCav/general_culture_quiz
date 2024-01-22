import { Request, Response } from 'express';

import Game from '../models/game';

export const games = async (req: Request, res: Response) => {

    try {

        return res.status(200).json({ message: "games" })
        
    } catch (error) {
        throw error
    }

}

export const generateGame = async (req: Request, res: Response) => {

    try {

        const game = new Game()

        await game.save()

        return res.status(200).json({ message: "generateGame" })
        
    } catch (error) {
        throw error
    }

}