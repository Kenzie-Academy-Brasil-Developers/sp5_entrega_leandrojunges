import { Request,Response } from "express";
import createScheduleService from "../../services/schedules/createSchedules.service";

const createScheduleController = async (req: Request, res: Response)=>{
  const scheduleData = req.body
  const schedule = await createScheduleService(scheduleData)

  return res.status(201).json({message: "Created", ...schedule})
}

export default createScheduleController