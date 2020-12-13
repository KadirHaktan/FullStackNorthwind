import Category from "../../../entities/concerete/Category";
import { BaseCategoryModel } from "../../../models/abstract/BaseCategoryModel";
import { Serializable } from "typescript-json-serializer";
import { IsEmpty, Length } from "class-validator";



@Serializable()
export default class CategoryModel implements BaseCategoryModel{


    @IsEmpty()
    id: number;

    @IsEmpty()
    name: string;
    
    @IsEmpty()
    @Length(3,70)
    description:string;

    constructor(category:Category){
        this.id=category.CategoryID
        this.name=category.CategoryName
        this.description=category.Description
    }
    
}