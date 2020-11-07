import { Serializable } from "typescript-json-serializer"

@Serializable()
export default class GeneralServiceResponse{

    isSuccess:boolean

    hasExceptionError:boolean

    exceptionMessage:string|null

    
    constructor(IsSuccess:boolean,HasExceptionError:boolean,ExceptionMessage:string|null)
    {
        this.isSuccess=IsSuccess
        this.hasExceptionError=HasExceptionError
        this.exceptionMessage=ExceptionMessage
    }


}