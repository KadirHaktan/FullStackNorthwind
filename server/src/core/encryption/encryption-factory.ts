import { BaseHash } from "./hash";
import { BaseMatch } from "./match";



export interface BaseEncryptionFactory{


    createHash():BaseHash
    createMatch():BaseMatch

    
}