import { Request, Response, NextFunction } from "express";

const questionValid = (req: Request, res: Response, next: NextFunction) => {

    const { question, answer } = req.body

    if(!question || !answer) {
        return res.status(401).json({ message: "There are empty fields" })
    }

    next()

}

export default questionValid