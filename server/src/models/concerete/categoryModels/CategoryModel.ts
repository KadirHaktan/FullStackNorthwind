import Category from "../../../entities/concerete/Category";
import { BaseCategoryModel } from "../../../models/abstract/BaseCategoryModel";
import { Serializable } from "typescript-json-serializer";



@Serializable()
export default class CategoryModel implements BaseCategoryModel{


    id: number;

    name: string;
    
    description:string;

    constructor(category:Category){
        this.id=category.CategoryID
        this.name=category.CategoryName
        this.description=category.Description
    }
    
}