
import {TYPES_ENUM} from './enum'

type InversifyBinding={[key in keyof typeof TYPES_ENUM]:symbol}

type IndexObject={[key:string]:symbol}


const mapToEnumTypes=<T>(typeEnum:T):InversifyBinding=>{
    const typeObjects:IndexObject={}
    Object.keys(typeEnum).forEach((key:string):void=>{
        typeObjects[key]=Symbol.for(key)
    })

    return typeObjects as InversifyBinding
}

export const TYPES=mapToEnumTypes(TYPES_ENUM)