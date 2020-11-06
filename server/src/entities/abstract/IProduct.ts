
import IEntity from "../../core/entities/IEntity";



export default interface IProduct extends IEntity{
    ProductID:number
    SupplierID:number
    CategoryID:number
    ProductName:string
    QuantityPerUnit:string
    UnitPrice:string
    UnitsOnOrder:number
    UnitsInStock:number
}


