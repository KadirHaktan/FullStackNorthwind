import IService from "src/core/services/IService";
import ICategory from "src/entities/abstract/ICategory";
import { BaseCategoryModel } from "src/models/abstract/BaseCategoryModel";


export default interface ICategoryService<T extends BaseCategoryModel> extends IService<T>{

}