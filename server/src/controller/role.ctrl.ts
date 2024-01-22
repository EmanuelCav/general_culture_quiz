import { Request, Response } from 'express';

import Role from '../models/role';

export const roles = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showRoles = await Role.find()

        return res.status(200).json(showRoles)

    } catch (error) {
        throw error
    }

}

export const createRole = async (req: Request, res: Response): Promise<Response> => {

    const { role } = req.body

    try {

        const newRole = new Role({
            role
        })

        await newRole.save()

        return res.status(200).json({ message: "Role created succesfully" })

    } catch (error) {
        throw error
    }

}