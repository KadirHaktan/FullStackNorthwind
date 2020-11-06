import {Connection,IDatabaseDriver, MikroORM} from "@mikro-orm/core"

import configDb from "./mikro.config"

import chalk from 'chalk'
import {Product} from "../entities/concerete/Product"
import Category from "../entities/concerete/Category"


export class DatabaseClient{
    public connect=async():Promise<MikroORM<IDatabaseDriver<Connection>>|void>=>{
        try{
            return await configDb("northwind",true,[Product,Category])
        }

        catch(error){
            process.stdout.write(chalk.redBright(`${(error as Error).message}`))
        }
    }
}