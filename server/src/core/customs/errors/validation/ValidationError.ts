import CustomError from "../CustomError"

export default class ValidationError extends CustomError{
    constructor(message:string,status:number=500){
        super(message,status)
    }
}