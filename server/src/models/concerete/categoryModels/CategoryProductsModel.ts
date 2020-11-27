import Category from "../../../entities/concerete/Category";
import { BaseCategoryModel } from "../../../models/abstract/BaseCategoryModel";
import { Serializable } from "typescript-json-serializer";
import { Product } from "../../../entities/concerete/Product";


@Serializable()
export class CategoryProductsModel implements BaseCategoryModel{

    id: number;

    name:string;

    description:string;

    products:Product[]

    constructor(category:Category,products:Product[]){
        this.id=category.CategoryID
        this.name=category.CategoryName
        this.description=category.Description
        this.products=products

    }
    
}