import { Request, Response } from "express";
import listScheduleService from "../../services/schedules/listSchedules.service";


const listScheduleController = async (req: Request, res: Response) =>{
  const id = req.params.id

  const schedule = await listScheduleService(id)

  return res.json(schedule)

}

export default listScheduleController