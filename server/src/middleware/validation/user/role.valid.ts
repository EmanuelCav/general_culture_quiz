import { Request, Response, NextFunction } from "express";

const roleValid = (req: Request, res: Response, next: NextFunction) => {

    const { role } = req.body

    if(!role) {
        return res.status(401).json({ message: "There are empty fields" })
    }

    next()

}

export default roleValid