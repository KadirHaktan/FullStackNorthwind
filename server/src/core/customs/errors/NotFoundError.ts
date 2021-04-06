import CustomError from "./CustomError"

export default class NotFoundError extends CustomError{
    constructor(message:string='Not found',status:number=404){
        super(message,status)
    }
}