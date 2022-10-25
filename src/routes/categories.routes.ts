import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import listCategoriesController from "../controllers/categories/listCategory.controller";
import listCategoryIdController from "../controllers/categories/listCategoryId.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import isAdmMiddleware from "../middlewares/isAdm.middleware";

const categoriesRoutes = Router()

categoriesRoutes.post('', authTokenMiddleware,isAdmMiddleware,createCategoryController)
categoriesRoutes.get('', listCategoriesController)
categoriesRoutes.get('/:id/properties',listCategoryIdController)

export default categoriesRoutes