import { Request, Response, NextFunction } from "express";

import { isString } from "../../../helper/regex";

const countryValid = (req: Request, res: Response, next: NextFunction) => {

    const { name, flag } = req.body

    if(!name || !flag) {
        return res.status(401).json({ message: "There are empty fields" })
    }

    if(!isString.test(name)) {
        return res.status(401).json({ message: "Format is not valid" })
    }

    next()

}

export default countryValid