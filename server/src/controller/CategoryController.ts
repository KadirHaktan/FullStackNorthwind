import { interfaces,httpGet,httpPost,httpDelete,controller,httpPut,next,request,response } from "inversify-express-utils";
import {inject} from "inversify"
import ICategoryService from "../services/abstract/ICategoryService";
import CategoryModel from "../models/concerete/categoryModels/CategoryModel";
import { TYPES } from "../types/index";
import { NextFunction,Request,Response } from "express";


@controller("/categories")
export default class CategoryController implements interfaces.Controller{

    _service:ICategoryService<CategoryModel>

    constructor(@inject(TYPES.ICategoryService)service:ICategoryService<CategoryModel>){
        this._service=service
    }

    @httpGet("/")
    async GetAll(@request()_request:Request,@response()response:Response,@next()_next:NextFunction){
        const result=await this._service.GetAll()
        response.json(result)
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