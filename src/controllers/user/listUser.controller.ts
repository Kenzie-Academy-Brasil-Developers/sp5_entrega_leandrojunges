import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listUsersService from "../../services/user/listUser.service";

const listUsersController = async (req:Request, res:Response) => {

    const users = await listUsersService()
    return res.json(instanceToPlain(users))
    
}

export default listUsersController