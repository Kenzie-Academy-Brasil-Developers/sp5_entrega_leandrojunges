import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { Schedules } from "../../entities/scheduleUserProperties.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";


const createScheduleService = async ({date, hour, propertyId,userId}: IScheduleRequest):Promise<Schedules> =>{

  const schedulesRepository = AppDataSource.getRepository(Schedules)
  const propertyRepository = AppDataSource.getRepository(Properties)
  const userRepository = AppDataSource.getRepository(User)

  const properties = await propertyRepository.findOneBy({
    id: propertyId
    
  })
  
  const user = await userRepository.findOneBy({
    id : userId
  })
  
  if(!properties){
    throw new AppError('schedule not found', 404)
  }
  const findData = await schedulesRepository.findOne({
    where:{
      hour
    }
  })
 
  
  
  const schedule = schedulesRepository.create({
    date,
    hour,
    property : properties,
    user: user!
    
  })
  const day  = new Date(schedule.date).getDay()
  const hora = parseInt(schedule.hour)
  
  
  
  if(hora >= 18 || hora < 8){
    throw new AppError('Hour invalid', 400)
  }
 
  if(findData){
    throw new AppError('schedule already exists', 400)
  }


  
  await schedulesRepository.save(schedule)

  return schedule

}
export default createScheduleService