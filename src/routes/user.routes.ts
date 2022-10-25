import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import deletedUserController from "../controllers/user/deleteUser.controller";
import listUsersController from "../controllers/user/listUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import isAdmMiddleware from "../middlewares/isAdm.middleware";
import updateMiddleware from "../middlewares/update.middleware";


const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', authTokenMiddleware,isAdmMiddleware,listUsersController)
userRoutes.patch('/:id', authTokenMiddleware,updateMiddleware,updateUserController)
userRoutes.delete('/:id', authTokenMiddleware, isAdmMiddleware, deletedUserController)

export default userRoutes