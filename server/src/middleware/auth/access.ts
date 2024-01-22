import { Request, Response, NextFunction } from "express";

import User from '../../models/user';
import Role from '../../models/role';

import { access_role } from "../../config/config";

const access = async (req: Request, res: Response, next: NextFunction) => {

    const user = await User.findById(req.user).select("-code")

    if(!user) {
        return res.status(400).json({ message: "User does not exists" })
    }

    const role = await Role.findOne({ role: `${access_role}` })

    if(!role) {
        return res.status(400).json({ message: "Role does not exists" })
    }

    if(String(user.role) !== String(role._id)) {
        return res.status(401).json({ message: "Not authorized" })
    }

    next()

}

export default access