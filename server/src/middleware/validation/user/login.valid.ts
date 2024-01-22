import { Request, Response, NextFunction } from "express";

import { isNicknameValid } from "../../../helper/regex";

const loginValid = (req: Request, res: Response, next: NextFunction) => {

    const { nickname, code } = req.body

    if(!nickname || !code) {
        return res.status(401).json({ message: "There are empty fields" })
    }

    if(!isNicknameValid.test(nickname)) {
        return res.status(401).json({ message: "Only characters and numbers are allowed" })
    }

    next()

}

export default loginValid