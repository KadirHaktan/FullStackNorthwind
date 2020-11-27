

import ICategory from "../abstract/ICategory";

import {Collection, Entity,OneToMany,PrimaryKey,Property}from '@mikro-orm/core'
import { Product } from "./Product";


@Entity({tableName:"categories"})
export default class Category implements ICategory{

    @PrimaryKey({name:"categoryid"})
    CategoryID: number;

    @Property({name:"categoryname"})
    CategoryName: string;

    @Property({name:"description"})
    Description: string; 
    
    @OneToMany(()=>Product,product=>product.category)
    products?=new Collection<Product>(this)

    // constructor(CategoryID:number,CategoryName:string,Description:string){
    //     this.CategoryID=CategoryID
    //     this.CategoryName=CategoryName,
    //     this.Description=Description
    // }

}