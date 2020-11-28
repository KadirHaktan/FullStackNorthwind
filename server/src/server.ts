
import "reflect-metadata"

import bodyparser from "body-parser"
import  cors from "cors"
import chalk from "chalk"



import { Application } from "express"

import {InversifyExpressServer} from "inversify-express-utils"
import {Container} from "inversify"
import {binding} from "./config/di.config"
import { buildProviderModule } from "inversify-binding-decorators"

import handleError from "./middlewares/error"


export class Server{

    protected app:Application|undefined
    protected server:InversifyExpressServer|undefined

    constructor(){
        this.#initContainer()
        .then((container:Container)=>{
            this.server=new InversifyExpressServer(container,null,{rootPath:"/api/v1"})
            this.server.setConfig((app:Application)=>{
                app.use(cors())
                app.use(bodyparser.json())
                app.use(bodyparser.urlencoded({extended:false}))
                
                
            })

            this.server.setErrorConfig((app:Application)=>{
                app.use(handleError)
            })

            this.app=this.server.build()

            this.app.listen(3000,():void=>{
                process.stdout.write(chalk.greenBright("server started on 3000 port"))
            })
        }).catch((error:Error)=>{
            process.stdout.write(chalk.redBright(error))
        })
    }
    


    #initContainer=async():Promise<Container>=>{

        const container=new Container()
        await container.loadAsync(binding)
    
        container.load(buildProviderModule())
    
        return container
    }
}


