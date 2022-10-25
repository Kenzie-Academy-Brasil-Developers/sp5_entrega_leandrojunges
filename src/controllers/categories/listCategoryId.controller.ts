import { Request, Response } from "express";
import listCategoryIdService from "../../services/categories/listCategoryId.service";

const listCategoryIdController = async (req:Request, res:Response) =>{
    const id = req.params.id
    
    const categoryId = await listCategoryIdService(id)
    return res.json(categoryId)
}

export default listCategoryIdController
