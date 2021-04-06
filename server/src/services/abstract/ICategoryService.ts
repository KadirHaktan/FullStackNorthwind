import IService from "../../core/services/IService";
import { BaseCategoryModel } from "../../models/abstract/BaseCategoryModel";


export default interface ICategoryService<T extends BaseCategoryModel> extends IService<T>{

}