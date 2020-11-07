
import {AsyncContainerModule,interfaces} from "inversify"
import {Connection,GetRepository,IDatabaseDriver,MikroORM,EntityRepository} from "@mikro-orm/core"
import {TYPES} from "../types/index"



import {DatabaseClient} from "./database"



import IEntity from "../core/entities/IEntity"
import IProductService from "../services/abstract/IProductService"

import ProductService from "../services/concerete/ProductService"



import "../controller/ProductController"
import { Product } from "../entities/concerete/Product"
import { ProductModel } from "src/models/concerete/productModels/ProductModel"

const bindToRepository=<T extends IEntity,U>(
    bind:interfaces.Bind,
    binding:symbol,
    connection:MikroORM<IDatabaseDriver<Connection>>,
    entity:{new(...args:string[] & U):T}):void=>
{
    bind<GetRepository<T,EntityRepository<T>>>(binding)
    .toDynamicValue(():GetRepository<T,EntityRepository<T>>=>{
        return connection.em.getRepository<T>(entity)
    }).inRequestScope()
}




export  const binding=new AsyncContainerModule(async(bind)=>{
    const dbClient:DatabaseClient=new DatabaseClient()
    const connection=await dbClient.connect()

    if(connection){
        bind<MikroORM<IDatabaseDriver<Connection>>>(TYPES.DatabaseConnection)
        .toConstantValue(connection)

        bindToRepository(bind,TYPES.ProductRepository,connection,Product)

        bind<IProductService<ProductModel>>(TYPES.IProductService)
        .to(ProductService)
        .inTransientScope()
    }
})

    

