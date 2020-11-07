import { Product } from "../../../entities/concerete/Product";
import { Serializable } from "typescript-json-serializer";
import { BaseProductModel } from "../../abstract/BaseProductModel";


@Serializable()
export class ProductModel implements BaseProductModel{

    id: number;

    supplierId:number

    categoryId:number

    productName: string

    quantityPerUnit:string

    unitPrice:string

    unitsInStock:number

    unitsOnOrder:number


    constructor(product:Product){
        this.id=product.ProductID
        this.supplierId=product.CategoryID
        this.categoryId=product.SupplierID
        this.productName=product.ProductName
        this.quantityPerUnit=product.QuantityPerUnit
        this.unitPrice=product.UnitPrice
        this.unitsInStock=product.UnitsInStock
        this.unitsOnOrder=product.UnitsOnOrder
    }
    
}