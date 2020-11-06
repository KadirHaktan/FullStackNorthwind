import IEntity from "../entities/IEntity";
import ServiceResponse from "./ServiceResponse";


export default interface IService<T extends IEntity>{

    GetAll():Promise<ServiceResponse<T>>

    GetById(id:number):Promise<ServiceResponse<T>>

    Add(entity:T):Promise<ServiceResponse<T>>

    Delete(id:number):Promise<ServiceResponse<T>>

    Update(id:number,entity:T):Promise<ServiceResponse<T>>
}