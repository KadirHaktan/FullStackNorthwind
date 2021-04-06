import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import IUser from "../abstract/IUser";



@Entity({tableName:"users"})
export class User implements IUser{

    @PrimaryKey({name:"id"})
    Id: number;

    @Property({name:"username"})
    UserName: string;

    @Property({name:"email"})
    Email: string;

    @Property({name:"password"})
    Password: string;
    
}