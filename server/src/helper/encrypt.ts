import jwt from 'jsonwebtoken';

import { jwt_key } from '../config/config';

export const generateToken = (id: string): string => {

    const token: string = jwt.sign({ id }, `${jwt_key}`, {
        expiresIn: '20d'
    })

    return token

}

export const generateUserNumber = (): string => {

    let code: string = ''
    
    for (let i = 0; i < 6; i++) {
        const number = Math.floor(Math.random() * 10)
        code+=String(number)
    }

    return code

}