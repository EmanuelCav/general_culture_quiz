import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

import { jwt_key } from "../../config/config";

import User from '../../models/user';

import { IValidation } from "../../interface/Validation";

const auth = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization?.split(" ")[1]

    if(!token) {
        return res.status(500).json({ message: "Token does not exists" })
    }

    const isValidate = jwt.verify(token, `${jwt_key}`) as IValidation    

    if(!isValidate) {
        return res.status(500).json({ message: "Token is not valid" })
    }

    req.user = isValidate.id

    const user = await User.findById(req.user).select("-code")

    if(!user) {
        return res.status(400).json({ message: "User does not exists" })
    }

    next()

}

export default auth