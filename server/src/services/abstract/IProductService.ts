import { BaseProductModel } from "../../models/abstract/BaseProductModel";
import IService from "../../core/services/IService";



export default interface IProductService<T extends BaseProductModel> extends IService<T>{

}