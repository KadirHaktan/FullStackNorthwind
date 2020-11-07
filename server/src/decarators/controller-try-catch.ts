
export  const controllerTryCatch=():any=>(_target:any,_propertyName:string,descriptor:PropertyDescriptor)=>{
    const fn=descriptor.value
    descriptor.value=async function(...args:any[]){
        try{
            return await fn.apply(this,args)        
        }
        catch(error){
            const [,res,_next]=args
            res.json(_next(error))
        }
    }
  }
