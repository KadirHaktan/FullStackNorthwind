import { Product } from "../../../entities/concerete/Product";
import { Serializable } from "typescript-json-serializer";
import { BaseProductModel } from "../../abstract/BaseProductModel";

import {IsEmpty, Length, Min} from "class-validator"
import { errorMessages } from "src/core/constables/messages/error-messages";


const {StringTypeValidation:{Empty,Lenght},NumberTypeValidation:{NumberEmpty,MinimumNumber}}=errorMessages.validation
@Serializable()

export class ProductModel implements BaseProductModel{


    @IsEmpty({message:Empty("id")})
    id: number;


    @IsEmpty({message:Empty("supplierId")})
    supplierId:number


    @IsEmpty({message:Empty("categoryId")})
    categoryId:number

    @IsEmpty({message:Empty("productName")})
    @Length(3,50,{message:Lenght("productName")})
    productName: string

    @IsEmpty({message:Empty("quantityPerUnit")})
    quantityPerUnit:string

    @IsEmpty({message:Empty("unitPrice")})
    unitPrice:string

    @Min(1,{message:MinimumNumber("unitsInStock")})
    @IsEmpty()
    unitsInStock:number

    @Min(1)
    @IsEmpty()
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