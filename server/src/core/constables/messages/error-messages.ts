

export const errorMessages={
    notFound:{
        Product:createNotFoundMessage("Product"),
        Category:createNotFoundMessage("Category")
    },
    validation:{
        StringTypeValidation:{
            Empty:(propertyName:string):string=>StringValidationMessages(propertyName).emptyValidationMessage,
            Lenght:(propertyName:string):string=>StringValidationMessages(propertyName).lengthValidationMessage
        },
        NumberTypeValidation:{
            NumberEmpty:(propertyName:string):string=>NumberValidationMessages(propertyName).emptyValidationMessage,
            MinimumNumber:(propertyName:string):string=>NumberValidationMessages(propertyName).minimumValueValidationMessage
        }
    }
}


//#region 404 not found from entity messages
function createNotFoundMessage(entityName:string):string{
    return `${entityName} not found`
}

//#endregion


function NumberValidationMessages(propertyName:string){

    return Object.freeze({
        emptyValidationMessage:notEmptyValidationMessage(propertyName),
        minimumValueValidationMessage:MinimumNumberValidationMessage()
    })

    function MinimumNumberValidationMessage():string{
        return `${propertyName} must be defining minimum value or greater than minimum value`
    }
}

//#region string type validation messages
function  StringValidationMessages(propertyName:string){

    return Object.freeze({
        emptyValidationMessage:notEmptyValidationMessage(propertyName),
        lengthValidationMessage:LengthValidationMessage()
    })


    function LengthValidationMessage():string{
        return `${propertyName} length should be between to two definening values`
    }
}

//#endregion





//#region common Validation Messages
function notEmptyValidationMessage(propertyName:string):string{
    return `${propertyName} can not be empty`
}
//#endregion
