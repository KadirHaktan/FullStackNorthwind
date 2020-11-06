
import {Request,Response} from "express"
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost,httpPut,interfaces,request,response} from "inversify-express-utils";
import {Product} from "../entities/concerete/Product";
import IProductService from "../services/abstract/IProductService";
import { TYPES } from "../types/index";


@controller("/product")
export default class ProductController implements interfaces.Controller{

    _service:IProductService<Product>

    constructor(@inject(TYPES.IProductService)service:IProductService<Product>){
        this._service=service
    }

   
    @httpGet("/")
    async getAll(@response()res:Response){
        const result=await this._service.GetAll()
        res.json(result)
    }

    @httpGet("/:id")
    async getById(@request()req:Request,@response()res:Response){
        const id=parseInt(req.params.id)
        const result=await this._service.GetById(id)
        res.json(result)
    }

   
    @httpPost("/")
    async add(@request()req:Request,@response()res:Response){
        const result=await this._service.Add(req.body)
        res.json(result)
    }

    @httpPut("/:id")
    async update(@request()req:Request,@response()res:Response){
        const result=await this._service.Update(parseInt(req.params.id),req.body)
        res.json(result)
    }

    @httpDelete("/:id")
    async delete(@request()req:Request,@response()res:Response){
        const result=await this._service.Delete(parseInt(req.params.id))
        res.json(result)
    }
}