
export  function controllerTryCatch(){
return function (_target:any,_key:string,descriptor:PropertyDescriptor){
    const fn=descriptor.value
    descriptor.value=async function(...args:any[]){
        try{
            const result=await fn.apply(this,...args)
            console.log(result)
            return result
        }
        catch(error){
            const [,res,_next]=args
            res.json(_next(error))
        }
    }
  }
}