

import ICategory from "../abstract/ICategory";

import {Entity,PrimaryKey,Property}from '@mikro-orm/core'


@Entity({tableName:"categories"})
export default class Category implements ICategory{

    @PrimaryKey({name:"categoryid"})
    CategoryID: number;

    @Property({name:"categoryname"})
    CategoryName: string;

    @Property({name:"description"})
    Description: string;   

}