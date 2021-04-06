

export interface BaseMatch{

    matchAsync(value:string,hash:string):Promise<boolean>
    match(value:string,hash:string):boolean
}