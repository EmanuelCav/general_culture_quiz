import { Request, Response, NextFunction } from "express";

import { isString } from "../../../helper/regex";

const languageValid = (req: Request, res: Response, next: NextFunction) => {

    const { language } = req.body

    if(!language) {
        return res.status(401).json({ message: "There are empty fields" })
    }

    if(!isString.test(language)) {
        return res.status(401).json({ message: "Format is not valid" })
    }

    next()

}

export default languageValid