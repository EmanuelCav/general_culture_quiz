import { Request, Response, NextFunction } from "express";

const categoryValid = (req: Request, res: Response, next: NextFunction) => {

    const { category, icon, colorActive, colorInactive } = req.body

    if(!category || !icon || !colorActive || !colorInactive) {
        return res.status(401).json({ message: "There are empty fields" })
    }

    next()

}

export default categoryValid