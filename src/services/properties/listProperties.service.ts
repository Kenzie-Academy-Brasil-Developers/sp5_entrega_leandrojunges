import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";


const listPropertiesService = async () =>{

  const propertyRepository = AppDataSource.getRepository(Properties)

  const property = await propertyRepository.find()

  return property

}

export default listPropertiesService
