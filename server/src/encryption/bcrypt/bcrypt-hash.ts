import { BaseHash } from "../../core/encryption/hash";

import {hash,hashSync,genSalt,genSaltSync} from "bcryptjs"


export class BcryptHash implements BaseHash{


    async hashAsync(value: string): Promise<string> {

        const salt=await genSalt(10)
        const result=await hash(value,salt)

        return result
    }

    hash(value: string):string {
        const salt=genSaltSync(10)
        return hashSync(value,salt)
    }
    
}