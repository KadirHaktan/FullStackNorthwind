import { Guid } from "../customs/create-guid";



export class TokenHandler{

    static createToken():string{
        const guid=Guid.newGuid()
        const now=Date.now().toString()
        return `${guid}æ${now}`
        
    }
}