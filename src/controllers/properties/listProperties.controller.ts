import { Request, Response } from "express"
import listPropertiesService from "../../services/properties/listProperties.service"

const listPropertiesController = async (req:Request, res:Response) =>{

  const property = await listPropertiesService()

  return res.json(property)

}

export default listPropertiesController