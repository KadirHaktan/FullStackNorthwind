import CustomError from "./CustomError"

export default class NotFoundError extends CustomError{
    constructor(message:string='Unauthorized',status:number=404){
        super(message,status)
    }
}