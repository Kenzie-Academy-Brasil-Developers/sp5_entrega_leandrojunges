import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";

const listScheduleService = async (id :string )=>{

  const scheduleRepository = AppDataSource.getRepository(Properties)
  

  const findSchedule = await scheduleRepository.findOne({
    where:{
      id : id
    },
    relations:{
      schedules: true
    }
  })

  if(!findSchedule){
    throw new AppError('Schedule not found', 404)
  }

  return findSchedule


}

export default listScheduleService