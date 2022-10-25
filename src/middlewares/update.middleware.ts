import { Request, Response, NextFunction } from "express"

const updateMiddleware = async (req: Request, res: Response, next: NextFunction) =>{
    
    const keys = Object.keys(req.body)
    
    if(keys[0] == 'isAdm' || keys[0] == 'isActive' || keys[0] == 'id'){
    return res.status(401).json({
        message: 'User not altered'
    })
    }
    
    
    if(!req.user.isAdm){
        return res.status(401).json({
            message: 'User is not admin'
        })
    }
    return next()
}
export default updateMiddleware