
import {NextFunction,Request,Response} from "express"
import CustomError from "../core/customs/errors/CustomError"

import GeneralServiceResponse from "../core/services/GeneralServiceResponse"

export default function handleError(
    error: Error|CustomError,
    _request: Request,
    response: Response,
    _next: NextFunction
  ){  
      if(error instanceof CustomError){
          response
          .status(error.status)
          .json(new GeneralServiceResponse(false,true,`${error.message}`))
          
      }
      else{
        response.status(500).json(new GeneralServiceResponse(false,true,error.message))
      }
  }