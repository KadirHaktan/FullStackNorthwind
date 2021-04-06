

export interface BaseHash{

    hashAsync(value:string):Promise<string>

    hash(value:string):string
}