import { BaseEncryptionFactory } from "../../core/encryption/encryption-factory";
import { BaseHash } from "../../core/encryption/hash";
import { BaseMatch } from "../../core/encryption/match";
import { BcryptHash } from "../bcrypt/bcrypt-hash";
import { BcryptMatch } from "../bcrypt/bcrypt-match";



export class BcryptEncryptionFactory implements BaseEncryptionFactory{

    createHash(): BaseHash {
        return new BcryptHash()
    }
    createMatch(): BaseMatch {
        return new BcryptMatch()
    }
    
}