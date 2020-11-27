import { interfaces,httpGet,httpPost,httpDelete,controller,httpPut,next,request,response } from "inversify-express-utils";
import {inject} from "inversify"
import ICategoryService from "../services/abstract/ICategoryService";
import CategoryModel from "../models/concerete/categoryModels/CategoryModel";
import { TYPES } from "../types/index";
import { controllerTryCatch } from "../decarators/controller-try-catch";
import { NextFunction,Request,Response } from "express";


@controller("/categories")
export default class CategoryController implements interfaces.Controller{

    _service:ICategoryService<CategoryModel>

    constructor(@inject(TYPES.ICategoryService)service:ICategoryService<CategoryModel>){
        this._service=service
    }

    @httpGet("/")
    @controllerTryCatch()
    async GetAll(@request()_request:Request,@response()response:Response,@next()_next:NextFunction){
        const result=await this._service.GetAll()
        response.json(result)
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

    @httpGet("/test/:id")
    @controllerTryCatch()
    async getTest(@request()req:Request,@response()res:Response,@next()_next:NextFunction){
        const id=parseInt(req.params.id)
        const result=await this._service.GetCategoryWithProducts(id)
        res.json(result)
    }
}