import IEntity from "../entities/IEntity";

import {JsonProperty,Serializable} from "typescript-json-serializer"

@Serializable()
export default class ServiceResponse<T extends IEntity>{

    list:T[]|null

    @JsonProperty()
    entity:T|null

    isSuccess:boolean

    hasExceptionError:boolean

    count:number

    @JsonProperty()
    exceptionMessage:string|null


    constructor(List:T[]|null,Entity:T|null,IsSuccess:boolean,HasExceptionError:boolean,Count:number,ExceptionMessage:string|null)
    {
        this.list=List
        this.entity=Entity
        this.isSuccess=IsSuccess
        this.hasExceptionError=HasExceptionError
        this.count=Count
        this.exceptionMessage=ExceptionMessage
    }


}