import { interfaces } from "../interfaces";
import { HttpResponseMessage } from "../httpResponseMessage";
import { BaseHttpController } from "../base_http_controller";
export default class JsonResult implements interfaces.IHttpActionResult {
    readonly json: any;
    readonly statusCode: number;
    private apiController;
    constructor(json: any, statusCode: number, apiController: BaseHttpController);
    executeAsync(): Promise<HttpResponseMessage>;
}
