import { injectable } from "inversify";
import { ICacheManager } from "src/core/caching/ICacheManager";
import client from "../../config/redis.config"


@injectable()
export class RedisCacheManager implements ICacheManager{

    async GetOrSet(key: string, storeFunction: any): Promise<any> {
        const value=await this.Get(key)
        let newVal;
        if(value===null){
             newVal=storeFunction
             await this.Add(key,JSON.stringify(newVal),3600)
        }
        else{
            newVal=value
        }

        return newVal
    }

   

    async Get(key: string): Promise<any> {
        return new Promise(async(resolve,reject)=>{
            return client.get(key,(err,val)=>{
                if(err){
                    reject(err)
                }
                else if(!val){
                    resolve(null)
                }
                else{
                   resolve(JSON.parse(val as string) as any[])
                }
            })
        })
    }
    async Add(key: string, value: string, seconds: number): Promise<boolean> {
        return await client.setex(key,seconds,value)
    }
    async Delete(key: string): Promise<boolean> {
        return await client.del(key)      
    }
    
}