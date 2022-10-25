import AppDataSource from "../../data-source";
import { Categories } from "../../entities/category.entity";

const listCategoriesService = async()=>{
    const categoriesRepository = AppDataSource.getRepository(Categories)
    const categories = await categoriesRepository.find()
    return categories
}

export default listCategoriesService