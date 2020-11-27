import { Product } from "../../entities/concerete/Product";
import IProductService from "../abstract/IProductService";
import ServiceResponse from "../../core/services/ServiceResponse";
import { EntityRepository } from "@mikro-orm/mysql";
import { inject, injectable } from "inversify";
import { TYPES } from "../../types/index";
import { ProductModel } from "../../models/concerete/productModels/ProductModel";
import { ICacheManager } from "../../core/caching/ICacheManager";

@injectable()
export default class ProductService implements IProductService<ProductModel> {
  _repository: EntityRepository<Product>;
  _cacheManager: ICacheManager;

  constructor(
    @inject(TYPES.ProductRepository) repository: EntityRepository<Product>,
    @inject(TYPES.CacheManager) cacheManager: ICacheManager
  ) {
    this._repository = repository;
    this._cacheManager = cacheManager;
  }
  async GetAll(): Promise<ServiceResponse<ProductModel>> {
    let modelList: ProductModel[] = [];
    const key = "products";
    

    const value=await this._cacheManager.GetOrSet<ProductModel[]>(key,()=>this.fillProductModel(modelList))
    const count=value == null ? 0 : value.length;


    return new ServiceResponse<ProductModel>(
      value,
      null,
      true,
      false,
      count,
      null
    );
  }

  async GetById(ProductID: number): Promise<ServiceResponse<ProductModel>> {
   
    const key=`product-${ProductID.toString()}`
    const result=await this._cacheManager.GetOrSet<ProductModel>(key,async ()=>{
      const entity = await this._repository.find({ ProductID });
      return new ProductModel(entity[0])
    })
    
    return new ServiceResponse<ProductModel>(
      null,
      result,
      true,
      false,
      1,
      null
    );
  }
  async Add(model: ProductModel): Promise<ServiceResponse<ProductModel>> {
    const entity: Product = {
      ProductID: model.id,
      ProductName: model.productName,
      CategoryID: model.categoryId,
      SupplierID: model.supplierId,
      QuantityPerUnit: model.quantityPerUnit,
      UnitPrice: model.unitPrice,
      UnitsInStock: model.unitsInStock,
      UnitsOnOrder: model.unitsOnOrder,
    };
    await this._repository.nativeInsert(entity);
    return new ServiceResponse<ProductModel>(null, model, true, false, 1, null);
  }

  async Delete(id: number): Promise<ServiceResponse<ProductModel>> {
    const count = await this._repository.nativeDelete(id);
    return new ServiceResponse<ProductModel>(
      null,
      null,
      true,
      false,
      count,
      null
    );
  }

  async Update(
    id: number,
    model: ProductModel
  ): Promise<ServiceResponse<ProductModel>> {
    const entity: Product = {
      ProductID: model.id,
      ProductName: model.productName,
      CategoryID: model.categoryId,
      SupplierID: model.supplierId,
      QuantityPerUnit: model.quantityPerUnit,
      UnitPrice: model.unitPrice,
      UnitsInStock: model.unitsInStock,
      UnitsOnOrder: model.unitsOnOrder,
    };
    const updatedCount = await this._repository.nativeUpdate(
      { ProductID: id },
      entity
    );

    return new ServiceResponse<ProductModel>(
      null,
      model,
      true,
      false,
      updatedCount,
      null
    );
  }

  //#region private methods
   private async fillProductModel(modelList: ProductModel[]) {

    const list:Product[]=await this._repository.findAll()
    list.forEach((p) => {
      modelList.push(new ProductModel(p));
    });

    return modelList
  }

  //#endregion
}
