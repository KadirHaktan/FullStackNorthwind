
import {NextFunction, Request,Response} from "express"
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost,httpPut,interfaces,next,request,response} from "inversify-express-utils";
import {Product} from "../entities/concerete/Product";
import IProductService from "../services/abstract/IProductService";
import { TYPES } from "../types/index";
import {controllerTryCatch} from "../decarators/controller-try-catch"


@controller("/product")
export default class ProductController implements interfaces.Controller{

    _service:IProductService<Product>

    constructor(@inject(TYPES.IProductService)service:IProductService<Product>){
        this._service=service
    }

   
    @httpGet("/")
    @controllerTryCatch()
    async getAll(@request()_request:Request,@response()res:Response,@next()_next:NextFunction){
        const result=await this._service.GetAll()
        res.json(result)
    }

    @httpGet("/:id")
    @controllerTryCatch()
    async getById(@request()req:Request,@response()res:Response,@next()_next:NextFunction){
        const id=parseInt(req.params.id)
        const result=await this._service.GetById(id)
        res.json(result)
    }

   
    @httpPost("/")
    @controllerTryCatch()
    async add(@request()req:Request,@response()res:Response,@next()_next:NextFunction){
        const result=await this._service.Add(req.body)
        res.json(result)
    }

    @httpPut("/:id")
    @controllerTryCatch()
    async update(@request()req:Request,@response()res:Response,@next()_next:NextFunction){
        const result=await this._service.Update(parseInt(req.params.id),req.body)
        res.json(result)
    }

    @httpDelete("/:id")
    @controllerTryCatch()
    async delete(@request()req:Request,@response()res:Response,@next()_next:NextFunction){
        const result=await this._service.Delete(parseInt(req.params.id))
        res.json(result)
    }
}