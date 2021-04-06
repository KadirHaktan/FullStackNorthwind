import { BaseMatch } from "../../core/encryption/match";

import {compare,compareSync} from "bcryptjs"



export class BcryptMatch implements BaseMatch{

    async matchAsync(value: string,hash:string): Promise<boolean> {
        const result=await compare(value,hash)
        return result
    }
    match(value: string,hash:string):boolean {
        return compareSync(value,hash)
    }
    
}