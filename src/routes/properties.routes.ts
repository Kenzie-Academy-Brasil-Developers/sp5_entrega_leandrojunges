import { Router } from "express"
import createPropertiesController from "../controllers/properties/createProperties.controller"
import listPropertiesController from "../controllers/properties/listProperties.controller"
import authTokenMiddleware from "../middlewares/authToken.middleware"
import isAdmMiddleware from "../middlewares/isAdm.middleware"


const propertiesRoutes = Router()

propertiesRoutes.post('',authTokenMiddleware,isAdmMiddleware,createPropertiesController)
propertiesRoutes.get('', listPropertiesController)

export default propertiesRoutes