
import {NextFunction,Request,Response} from "express"
import CustomError from "../core/customs/errors/CustomError"

import GeneralServiceResponse from "../core/services/GeneralServiceResponse"

export const handleError = (
    error: Error|CustomError,
    _request: Request,
    response: Response,
    _next: NextFunction
  ): void => {  
     
      if(error instanceof CustomError){
          response
          .status(error.status)
          .json(new GeneralServiceResponse(false,true,`${error.message}:${error.status}`))
      }
      else{
          response.status(500).json(new GeneralServiceResponse(false,true,error.message))
      }
  }