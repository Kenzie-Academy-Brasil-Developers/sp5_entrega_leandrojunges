import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { IPropertyRequest } from "../../interfaces/properties";
import { Addresses } from "../../entities/addresses.entity";
import { Categories } from "../../entities/category.entity";
import { AppError } from "../../errors/appError";


const createPropertyService = async ({value,size,address,categoryId}:IPropertyRequest):Promise<Properties> =>{

  const propertyRepository  = AppDataSource.getRepository(Properties)
  const addressRepository   = AppDataSource.getRepository(Addresses)
  const categoryRepository  = AppDataSource.getRepository(Categories)

  const addressImmobili = addressRepository.create({
  district  : address.district,
  zipCode   : address.zipCode,
  number    : address.number,
  city      :address.city,
  state     : address.state
  })

  await addressRepository.save(addressImmobili)

  const categoryProp = await categoryRepository.findOneBy({
  id: categoryId
  })

 const addressExists = await propertyRepository.findOne({
  where:{
    address
  }
  })
  
 
  if(!categoryProp){
   throw new AppError('Category not found', 404)
  }


  if(addressExists){
   throw new AppError('Property alredy exists', 400)
  }


  if(addressImmobili.state.length > 2){
   throw new AppError('Error invalid state', 400)
  }

  if(addressImmobili.zipCode.length > 8){
  throw new AppError('Error zip code is greater than 8 numbers', 400)
 }

 

 const immobili = propertyRepository.create({
    value,
    size,
    address   : addressImmobili,
    category  : categoryProp
  })




  await propertyRepository.save(immobili)

  return immobili

}

export default createPropertyService