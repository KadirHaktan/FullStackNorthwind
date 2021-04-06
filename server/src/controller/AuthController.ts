import { controller, interfaces,request,response,next, httpPost } from "inversify-express-utils";
import {Request,Response,NextFunction} from "express"



import { TokenHandler } from "../core/auth/token-handler";



@controller("/auth")
export default class AuthController implements interfaces.Controller{



    @httpPost("/login")
    async Login(@request()req:Request,@response()res:Response,@next()_next:NextFunction){  
        const token=TokenHandler.createToken()
    }



}