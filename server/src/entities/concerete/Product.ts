import IProduct from "../abstract/IProduct";

import {Entity, Property,PrimaryKey}from '@mikro-orm/core'

@Entity({tableName:"products",})
export class Product implements IProduct{

    @PrimaryKey({name:"productid"})
    ProductID: number;


    @Property({name:"supplierid"})
    SupplierID: number;

    @Property({name:"categoryid"})
    CategoryID: number;

    @Property({name:"productname"})
    ProductName: string;

    @Property({name:"quantityperunit"})
    QuantityPerUnit: string;

    @Property({name:"unitprice"})
    UnitPrice:string

    @Property({name:"unitsonorder"})
    UnitsOnOrder: number;

    @Property({name:"unitsinstock"})
    UnitsInStock: number;
    
}