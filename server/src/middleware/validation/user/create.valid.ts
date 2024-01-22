import { Request, Response, NextFunction } from "express";

import User from '../../../models/user';

import { isNicknameValid } from "../../../helper/regex";

const createValid = async (req: Request, res: Response, next: NextFunction) => {

    const { nickname, code } = req.body

    if(!nickname || !code) {
        return res.status(401).json({ message: "There are empty fields" })
    }

    if(!isNicknameValid.test(nickname)) {
        return res.status(401).json({ message: "Only characters and numbers are allowed" })
    }

    const isNickname = await User.findOne({ nickname })

    if(isNickname) {
        return res.status(401).json({ message: "Nickname already exists" })
    }

    next()

}

export default createValid