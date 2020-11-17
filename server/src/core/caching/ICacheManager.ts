

export interface ICacheManager{

     Get(key:string):Promise<any>

     Add(key:string,value:string,seconds:number):Promise<boolean>

     Delete(key:string):Promise<boolean>

     GetOrSet(key:string,storeFunction:any):Promise<any>
}