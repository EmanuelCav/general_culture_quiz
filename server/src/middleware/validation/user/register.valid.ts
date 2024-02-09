import { Request, Response, NextFunction } from "express";

import User from '../../../models/user';

import { isNicknameValid } from "../../../helper/regex";

const createValid = async (req: Request, res: Response, next: NextFunction) => {

    const { nickname, code } = req.body

    if(!nickname || !code) {
        return res.status(401).json({ message: "Hay campos vacios. Por favor completa" })
    }

    if(!isNicknameValid.test(nickname)) {
        return res.status(401).json({ message: "Solo se permiten carácteres y números" })
    }

    const isNickname = await User.findOne({ nickname })

    if(isNickname) {
        return res.status(401).json({ message: "El nombre de usuario ya existe" })
    }

    next()

}

export default createValid