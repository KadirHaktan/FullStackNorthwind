import IService from "src/core/services/IService";
import ServiceResponse from "src/core/services/ServiceResponse";
import { CategoryProductsModel } from "../../models/concerete/categoryModels/CategoryProductsModel";
import { BaseCategoryModel } from "../../models/abstract/BaseCategoryModel";


export default interface ICategoryService<T extends BaseCategoryModel> extends IService<T>{


    GetCategoryWithProductInfos():Promise<ServiceResponse<CategoryProductsModel>>

    GetCategoryWithProducts(id:number):Promise<ServiceResponse<CategoryProductsModel>>
}