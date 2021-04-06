import ServiceResponse from "../../core/services/ServiceResponse";
import IService from "../../core/services/IService";
import { BaseUserModel } from "../../models/abstract/BaseUserModel";


export interface IUserService<T extends BaseUserModel> extends IService<T>{


    GetByEmail(email:string):Promise<ServiceResponse<T>>

}