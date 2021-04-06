import { inject } from "inversify";
import { BaseEncryptionFactory } from "../core/encryption/encryption-factory";
import { BaseHash } from "../core/encryption/hash";
import { BaseMatch } from "../core/encryption/match";
import { TYPES_ENUM } from "../types/enum";




export class Encryption{

    private _hash:BaseHash
    private _match:BaseMatch


    constructor(@inject(TYPES_ENUM.EncryptionFactory)encryptionFactory:BaseEncryptionFactory){
        this._hash=encryptionFactory.createHash()
        this._match=encryptionFactory.createMatch()
    }
    
    async Hash(value:string):Promise<string>{
        return this._hash.hashAsync(value)
    }

    async Match(value:string,hash:string):Promise<boolean>{
        return this._match.matchAsync(value,hash)
    }


}