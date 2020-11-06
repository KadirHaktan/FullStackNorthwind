
import {MikroORM} from '@mikro-orm/core'
import { EntityClass } from '@mikro-orm/core/typings'
import IEntity from 'src/core/entities/IEntity'



const configDb=async(dbName:string,debug:boolean,entities:EntityClass<IEntity>[])=>{
    return await MikroORM.init({
        dbName,
        entities,
        type:"mysql",
        debug
    })
}



export default configDb
