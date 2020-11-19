import { BaseProductModel } from "../../models/abstract/BaseProductModel";
import IService from "../../core/services/IService";
import ServiceResponse from "src/core/services/ServiceResponse";
import { ProductCategoryModel } from "src/models/concerete/productModels/ProductCategoryModel";



export default interface IProductService<T extends BaseProductModel> extends IService<T>{

    GetProductsWithCategoryInfos():ServiceResponse<ProductCategoryModel> 

    GetProductWithCategoryInfo(id:number):ServiceResponse<ProductCategoryModel>
}