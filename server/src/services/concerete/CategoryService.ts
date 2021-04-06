import { EntityRepository } from "@mikro-orm/core";
import { inject, injectable } from "inversify";
import { ICacheManager } from "src/core/caching/ICacheManager";
import Category from "../../entities/concerete/Category";
import { TYPES } from "../../types";
import ServiceResponse from "../../core/services/ServiceResponse";
import CategoryModel from "../../models/concerete/categoryModels/CategoryModel";
import ICategoryService from "../abstract/ICategoryService";
import NotFoundError from "../../core/customs/errors/NotFoundError";
import { errorMessages } from "../../core/constables/messages/error-messages";

@injectable()
export default class CategoryService implements ICategoryService<CategoryModel> {
  _repository: EntityRepository<Category>;
  _cacheManager: ICacheManager;

  constructor(
    @inject(TYPES.CategoryRepository) repository: EntityRepository<Category>,
    @inject(TYPES.CacheManager) cacheManager: ICacheManager) {
    this._repository = repository;
    this._cacheManager = cacheManager;
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
    const key=`category-${id.toString()}`
    const result=await this._cacheManager.GetOrSet<CategoryModel>(key,async ()=>{
      const entity = await this._repository.find({CategoryID:id});
      return this.IfEntityIsNotNull(entity[0])
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

  private IfEntityIsNotNull(entity:Category):CategoryModel{
    if(!entity){
      throw new NotFoundError(errorMessages.notFound.Category)
    }else{
      return new CategoryModel(entity)
    }
  }
  //#endregion
}
