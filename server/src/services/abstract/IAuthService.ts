import { LoginUserModel } from "src/models/concerete/userModels/login-user-model";


export interface IAuthService{

    CompareLoginUserPasswordAsync(user:LoginUserModel,password:string):Promise<boolean>
    CompareLoginUserPassword(user:LoginUserModel,password:string):boolean

    CreateAccessTokenAsync(name:string):Promise<string>
    CreateAccessToken(name:string):string

    IsRefreshTokenAsync(name:string,token:string):Promise<string>
    IsRefreshToken(name:string,token:string):string


}