import IService from "../../core/services/IService";
import IProduct from "../../entities/abstract/IProduct";

export default interface IProductService<T extends IProduct> extends IService<T>{

}