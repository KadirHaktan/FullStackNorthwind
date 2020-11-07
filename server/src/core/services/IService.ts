
import BaseModel from "../models/BaseModel";
import ServiceResponse from "./ServiceResponse";


export default interface IService<T extends BaseModel>{

    GetAll():Promise<ServiceResponse<T>>

    GetById(id:number):Promise<ServiceResponse<T>>

    Add(model:T):Promise<ServiceResponse<T>>

    Delete(id:number):Promise<ServiceResponse<T>>

    Update(id:number,model:T):Promise<ServiceResponse<T>>
}