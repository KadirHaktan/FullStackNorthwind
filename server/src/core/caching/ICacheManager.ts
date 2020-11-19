

export interface ICacheManager{

     Get<T>(key:string):Promise<T|null>

     Add(key:string,value:string,seconds:number):Promise<boolean>

     Delete(key:string):Promise<boolean>

     GetOrSet<T>(key:string,storeFunction:any):Promise<T|null>
}