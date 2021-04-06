import { BaseUserModel } from "src/models/abstract/BaseUserModel";



export class LoginUserModel implements BaseUserModel{

    email: string;
    password:string;
    
}