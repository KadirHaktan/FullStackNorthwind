import { EntityRepository } from "@mikro-orm/mysql";
import { inject, injectable } from "inversify";
import { ICacheManager } from "src/core/caching/ICacheManager";
import Category from "../../entities/concerete/Category";
import { TYPES } from "../../types";
import ServiceResponse from "../../core/services/ServiceResponse";
import CategoryModel from "../../models/concerete/categoryModels/CategoryModel";
import { CategoryProductsModel } from "../../models/concerete/categoryModels/CategoryProductsModel";
import ICategoryService from "../abstract/ICategoryService";

@injectable()
export default class CategoryService
  implements ICategoryService<CategoryModel> {
  _repository: EntityRepository<Category>;
  _cacheManager: ICacheManager;

  constructor(
    @inject(TYPES.CategoryRepository) repository: EntityRepository<Category>,
    @inject(TYPES.CacheManager) cacheManager: ICacheManager) {
    this._repository = repository;
    this._cacheManager = cacheManager;
  }

  GetCategoryWithProductInfos(): Promise<ServiceResponse<CategoryProductsModel>> {
    throw new Error("Method not implemented.");
  }
  GetCategoryWithProducts(_id: number): Promise<ServiceResponse<CategoryProductsModel>> {
    throw new Error("Method not implemented.");
  }
  async GetAll(): Promise<ServiceResponse<CategoryModel>> {
    let modelList: CategoryModel[] = [];
    const key = "categories";

    const value = await this._cacheManager.GetOrSet<CategoryModel[]>(key,()=>this.fillCategoryModel(modelList));
    const count = value == null ? 0 : value.length;

    return new ServiceResponse<CategoryModel>(
      value,
      null,
      true,
      false,
      count,
      null
    );
  }
  async GetById(id: number): Promise<ServiceResponse<CategoryModel>> {
    const key=`product-${id.toString()}`
    const result=await this._cacheManager.GetOrSet<CategoryModel>(key,async ()=>{
      const entity = await this._repository.find({CategoryID:id});
      return new CategoryModel(entity[0])
    })
    
    return new ServiceResponse<CategoryModel>(
      null,
      result,
      true,
      false,
      1,
      null
    );
  }
  async Add(model: CategoryModel): Promise<ServiceResponse<CategoryModel>> {
    const entity: Category = {
       CategoryID:model.id,
       CategoryName:model.name,
       Description:model.description
    }

    await this._repository.nativeInsert(entity);
    return new ServiceResponse<CategoryModel>(null, model, true, false, 1, null);
  }
  async Delete(id: number): Promise<ServiceResponse<CategoryModel>> {
    const count = await this._repository.nativeDelete(id);
    return new ServiceResponse<CategoryModel>(
      null,
      null,
      true,
      false,
      count,
      null
    );
  }
  async Update(id: number,model: CategoryModel): Promise<ServiceResponse<CategoryModel>> {
    const entity: Category = {
      CategoryID:model.id,
      CategoryName:model.name,
      Description:model.description
    };
    const updatedCount = await this._repository.nativeUpdate(
      { CategoryID:id },
      entity
    );

    return new ServiceResponse<CategoryModel>(
      null,
      model,
      true,
      false,
      updatedCount,
      null
    );
  }

  //#region  privateMethods

  private async fillCategoryModel(modelList: CategoryModel[]) {
    const list: Category[] = await this._repository.findAll();
    list.forEach((p) => {
      modelList.push(new CategoryModel(p));
    });

    return modelList;
  }
  //#endregion
}
