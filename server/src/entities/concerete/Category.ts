

import ICategory from "../abstract/ICategory";

import {Entity,PrimaryKey,Property}from '@mikro-orm/core'

@Entity({tableName:"Categories"})
export default class Category implements ICategory{

    @PrimaryKey()
    CategoryID: number;

    @Property()
    CategoryName: string;

    @Property()
    Description: string;   
}