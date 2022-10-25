import { Request, Response } from "express"
import deleteUserService from "../../services/user/deleteUser.service"

const deletedUserController = async (req:Request ,res:Response) =>{
   
    const id = req.params.id
    await deleteUserService(id)
    return res.status(204).send()

}

export default deletedUserController