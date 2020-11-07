import {Product} from "../../entities/concerete/Product";
import IProductService from "../abstract/IProductService";
import ServiceResponse from "../../core/services/ServiceResponse";
import { EntityRepository } from "@mikro-orm/core";
import { inject, injectable } from "inversify";
import { TYPES } from "../../types/index";
import { ProductModel } from "../../models/concerete/productModels/ProductModel";



@injectable()

export default class ProductService implements IProductService<ProductModel>{

    _repository:EntityRepository<Product>

    constructor(@inject(TYPES.ProductRepository)repository:EntityRepository<Product>){
        this._repository=repository
    }
    async GetAll(): Promise<ServiceResponse<ProductModel>> {
        const list:Product[]=await this._repository.findAll()
        const modelList:ProductModel[]=[]

        list.forEach((p)=>{
            modelList.push(new ProductModel(p))
        })

        return new ServiceResponse<ProductModel>(modelList,null,true,false,list.length,null)
    }

    async GetById(ProductID: number): Promise<ServiceResponse<ProductModel>> {
         const entity=await this._repository.find({ProductID})

         const resultEntity:ProductModel=new ProductModel(entity[0])

         return new ServiceResponse<ProductModel>(null,resultEntity,true,false,1,null)
    }
    async Add(model:ProductModel): Promise<ServiceResponse<ProductModel>> {
        const entity:Product={
            ProductID:model.id,
            ProductName:model.productName,
            CategoryID:model.categoryId,
            SupplierID:model.supplierId,
            QuantityPerUnit:model.quantityPerUnit,
            UnitPrice:model.unitPrice,
            UnitsInStock:model.unitsInStock,
            UnitsOnOrder:model.unitsOnOrder
        }
        await this._repository.nativeInsert(entity)
        return new ServiceResponse<ProductModel>(null,model,true,false,1,null)
    }
    async Delete(id: number): Promise<ServiceResponse<ProductModel>> {
        const count=await this._repository.nativeDelete(id)
        return new ServiceResponse<ProductModel>(null,null,true,false,count,null)
    }
    async Update(id: number, model: ProductModel): Promise<ServiceResponse<ProductModel>> {
        const entity:Product={
            ProductID:model.id,
            ProductName:model.productName,
            CategoryID:model.categoryId,
            SupplierID:model.supplierId,
            QuantityPerUnit:model.quantityPerUnit,
            UnitPrice:model.unitPrice,
            UnitsInStock:model.unitsInStock,
            UnitsOnOrder:model.unitsOnOrder
        }
        const updatedCount=await this._repository.nativeUpdate({ProductID:id},entity)
        return new ServiceResponse<ProductModel>(null,null,true,false,updatedCount,null)
    }

   
    
    
}