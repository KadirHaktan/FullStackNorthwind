import {Product} from "../../entities/concerete/Product";
import IProductService from "../abstract/IProductService";
import ServiceResponse from "../../core/services/ServiceResponse";
import { EntityRepository } from "@mikro-orm/core";
import { inject, injectable } from "inversify";
import { TYPES } from "../../types/index";



@injectable()

export default class ProductService implements IProductService<Product>{

    _repository:EntityRepository<Product>

    constructor(@inject(TYPES.ProductRepository)repository:EntityRepository<Product>){
        this._repository=repository
    }
    async GetAll(): Promise<ServiceResponse<Product>> {
        const list:Product[]=await this._repository.findAll()
        return new ServiceResponse<Product>(list,null,true,false,list.length,null)
    }
    async GetById(ProductID: number): Promise<ServiceResponse<Product>> {
         const entity=await this._repository.findOne({ProductID})
         return new ServiceResponse<Product>(null,entity,true,false,1,null)
    }
    async Add(entity: Product): Promise<ServiceResponse<Product>> {
        await this._repository.nativeInsert(entity)
        return new ServiceResponse<Product>(null,entity,true,false,1,null)
    }
    async Delete(id: number): Promise<ServiceResponse<Product>> {
        const count=await this._repository.nativeDelete(id)
        return new ServiceResponse<Product>(null,null,true,false,count,null)
    }
    async Update(id: number, entity: Product): Promise<ServiceResponse<Product>> {
        const updatedCount=await this._repository.nativeUpdate({ProductID:id},entity)
        return new ServiceResponse<Product>(null,null,true,false,updatedCount,null)
    }
    
    
}