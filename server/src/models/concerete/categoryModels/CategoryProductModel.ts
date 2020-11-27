
import Category from "../../../entities/concerete/Category";
import { BaseCategoryModel } from "../../../models/abstract/BaseCategoryModel";
import { Serializable } from "typescript-json-serializer";
import { Product } from "../../../entities/concerete/Product";


@Serializable()
export class CategoryProductModel implements BaseCategoryModel{

    id: number;

    name:string;

    description:string;

    product:Product

    constructor(category:Category,product:Product){
        this.id=category.CategoryID
        this.name=category.CategoryName
        this.description=category.Description
        this.product=product

    }
    
}