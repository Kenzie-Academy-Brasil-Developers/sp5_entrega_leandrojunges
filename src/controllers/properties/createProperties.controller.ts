import { Request, Response } from "express";
import createPropertyService from "../../services/properties/createProperties.service";

const createPropertiesController = async (req: Request, res: Response)=>{

  const data = req.body
  const createImmobili = await createPropertyService(data)

  return res.status(201).json(createImmobili)


}

export default createPropertiesController