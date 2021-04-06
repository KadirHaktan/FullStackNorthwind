import IEntity from "src/core/entities/IEntity";


export default interface IUser extends IEntity{

    Id:number
    UserName:string
    Email:string
    Password:string
}