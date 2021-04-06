
import {NextFunction, Request,Response} from "express"
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost,httpPut,interfaces,next,request,response} from "inversify-express-utils";

import IProductService from "../services/abstract/IProductService";
import { TYPES } from "../types/index";
import { ProductModel } from "src/models/concerete/productModels/ProductModel";

@controller("/products")
export default class ProductController implements interfaces.Controller{

    _service:IProductService<ProductModel>

    constructor(@inject(TYPES.IProductService)service:IProductService<ProductModel>){
        this._service=service
    }
    

   
    @httpGet("/")
    async getAll(@request()_request:Request,@response()res:Response,@next()_next:NextFunction){
        const result=await this._service.GetAll()
        res.json(result)
    }

    @httpGet("/:id")
    async getById(@request()req:Request,@response()res:Response,@next()_next:NextFunction){
        const id=parseInt(req.params.id)
        const result=await this._service.GetById(id)
        res.json(result)
    }

   
    @httpPost("/")
    async add(@request()req:Request,@response()res:Response,@next()_next:NextFunction){
        const result=await this._service.Add(req.body)
        res.json(result)
    }

    @httpPut("/:id")
    async update(@request()req:Request,@response()res:Response,@next()_next:NextFunction){
        const result=await this._service.Update(parseInt(req.params.id),req.body)
        res.json(result)
    }

    @httpDelete("/:id")
    async delete(@request()req:Request,@response()res:Response,@next()_next:NextFunction){
        const result=await this._service.Delete(parseInt(req.params.id))
        res.json(result)
    }

}