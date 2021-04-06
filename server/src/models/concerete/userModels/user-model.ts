import { User } from "../../../entities/concerete/User";
import { BaseUserModel } from "../../abstract/BaseUserModel";

export class UserModel implements BaseUserModel{

    name:string
    email: string
    password:string


    constructor(user:User){
        this.email=user.Email
        this.name=user.UserName,
        this.password=user.Password
    }
    
}