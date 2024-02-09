import { Request, Response, NextFunction } from "express";

const loginValid = (req: Request, res: Response, next: NextFunction) => {

    const { nickname, code } = req.body

    if(!nickname || !code) {
        return res.status(401).json({ message: "There are empty fields" })
    }

    next()

}

export default loginValid