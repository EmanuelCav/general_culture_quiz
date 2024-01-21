import { Request, Response } from "express";

export const firstTime = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "firstTime" })
        
    } catch (error) {
        throw error
    }

}

export const login = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "login" })
        
    } catch (error) {
        throw error
    }

}