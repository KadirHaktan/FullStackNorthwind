import { HttpResponseMessage } from "../httpResponseMessage";
import { interfaces } from "../interfaces";
import { BaseHttpController } from "../base_http_controller";
export default class StatusCodeResult implements interfaces.IHttpActionResult {
    private statusCode;
    private apiController;
    constructor(statusCode: number, apiController: BaseHttpController);
    executeAsync(): Promise<HttpResponseMessage>;
}
