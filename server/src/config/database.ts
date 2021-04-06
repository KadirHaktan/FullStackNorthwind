import {Connection,IDatabaseDriver, MikroORM} from "@mikro-orm/core"

import configDb from "./mikro.config"

import {Product} from "../entities/concerete/Product"
import Category from "../entities/concerete/Category"
import { User } from "../entities/concerete/User"


export class DatabaseClient{
    public connect=async():Promise<MikroORM<IDatabaseDriver<Connection>>>=>{
        try{
            return await configDb("northwind",true,[Product,Category,User])
        }

        catch(error){
            throw error
        }
    }
}