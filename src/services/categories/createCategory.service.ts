import AppDataSource from "../../data-source";
import { ICategoryRequest } from "../../interfaces/categories";
import { Categories } from "../../entities/category.entity";
import { AppError } from "../../errors/appError";


const createCategoryService = async({name}: ICategoryRequest): Promise<Categories> =>{

    const categoryRepository = AppDataSource.getRepository(Categories)


     const categoryExists = await categoryRepository.findOneBy({name})

     


   if(categoryExists){

        throw new AppError('Category already registered', 400)

    }


    const category = categoryRepository.create({
        name,
    })
    
    await categoryRepository.save(category)
    return category
}

export default createCategoryService;