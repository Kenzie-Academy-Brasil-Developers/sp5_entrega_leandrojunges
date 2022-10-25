import AppDataSource from "../../data-source";
import { Categories } from "../../entities/category.entity";
import { AppError } from "../../errors/appError";

const listCategoryIdService = async (id:string ):Promise<Categories> =>{
    const categoryRepository = AppDataSource.getRepository(Categories)

    const findCategory = await categoryRepository.findOne({
       where:{id},
       relations:{
        properties: true
       }
    })

    if(!findCategory){
        throw new AppError('Category not found',404)
    }
    

    return findCategory


}

export default listCategoryIdService