
import CustomError from "./CustomError"

export default class UnauthorizedError extends CustomError{
    constructor(message:string='Unauthorized',status:number=401){
        super(message,status)
    }
}