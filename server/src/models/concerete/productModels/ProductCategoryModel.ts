import Category from "src/entities/concerete/Category";
import { Product } from "src/entities/concerete/Product";
import { BaseProductModel } from "src/models/abstract/BaseProductModel";
import { Serializable } from "typescript-json-serializer";

@Serializable()
export class ProductCategoryModel implements BaseProductModel{

    id: number;

    categoryId:number

    productName: string

    categoryName:string

    description:string

    quantityPerUnit:string

    unitPrice:string

    unitsInStock:number

    unitsOnOrder:number


    constructor(product:Product,category:Category){
        this.id=product.ProductID
        this.categoryId=product.CategoryID
        this.productName=product.ProductName
        this.quantityPerUnit=product.QuantityPerUnit
        this.unitPrice=product.UnitPrice
        this.unitsInStock=product.UnitsInStock
        this.unitsOnOrder=product.UnitsOnOrder
        this.categoryName=category.CategoryName
        this.description=category.Description
    }
    
}