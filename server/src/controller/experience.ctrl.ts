import { Request, Response } from 'express';

import User from '../models/user';
import Experience from '../models/experience';

export const createExperience = async (req: Request, res: Response): Promise<Response> => {

    try {

        const user = await User.findById(req.user)

        if(!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const newExperience = new Experience({
            user: req.user
        })

        const experienceSaved = await newExperience.save()

        const userUpdated = await User.findByIdAndUpdate(req.user, {
            points: experienceSaved._id
        }, {
            new: true
        })

        return res.status(200).json(userUpdated)

    } catch (error) {
        throw error
    }

}
