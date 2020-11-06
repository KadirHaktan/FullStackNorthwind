import { HttpResponseMessage } from "../httpResponseMessage";
import { interfaces } from "../interfaces";
import { BaseHttpController } from "../base_http_controller";
export default class ExceptionResult implements interfaces.IHttpActionResult {
    private error;
    private apiController;
    constructor(error: Error, apiController: BaseHttpController);
    executeAsync(): Promise<HttpResponseMessage>;
}
