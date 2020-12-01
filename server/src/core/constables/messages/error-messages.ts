


export const errorMessages={
    notFound:{
        Product:createNotFoundMessage("Product"),
        Category:createNotFoundMessage("Category")
    }
}


function createNotFoundMessage(entityName:string):string{
    return `${entityName} not found`
}