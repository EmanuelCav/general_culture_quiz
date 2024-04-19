import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import bcryptjs from 'bcryptjs';

import { jwt_key } from '../config/config';

export const generateToken = (id: Types.ObjectId): string => {

    const token: string = jwt.sign({ id }, `${jwt_key}`, {
        expiresIn: '150d'
    })

    return token

}

export const generateCode = (times: number): string => {

    let userNumber: string = ''
    
    for (let i = 0; i < times; i++) {
        const number = Math.floor(Math.random() * 10)
        userNumber+=String(number)
    }

    return userNumber

}

export const hashCode = async (code: string): Promise<string> => {

    const salt = await bcryptjs.genSalt(8)
    return await bcryptjs.hash(code, salt)

}

export const compareCode = async (code: string, hash: string): Promise<boolean> => {

    return await bcryptjs.compare(code, hash)

}