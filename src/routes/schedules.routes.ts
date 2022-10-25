import { Router } from "express"
import createScheduleController from "../controllers/schedules/createSchedules.controller"
import listScheduleController from "../controllers/schedules/listSchedules.controller"
import authTokenMiddleware from "../middlewares/authToken.middleware"
import isAdmMiddleware from "../middlewares/isAdm.middleware"



const scheduleRoutes = Router()

scheduleRoutes.post('',authTokenMiddleware,createScheduleController)
scheduleRoutes.get('/properties/:id', authTokenMiddleware, isAdmMiddleware, listScheduleController)

export default scheduleRoutes