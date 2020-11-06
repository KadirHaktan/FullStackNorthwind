import { HttpResponseMessage } from "../httpResponseMessage";
import { interfaces } from "../interfaces";
import { BaseHttpController } from "../base_http_controller";
export default class BadRequestResult implements interfaces.IHttpActionResult {
    private apiController;
    constructor(apiController: BaseHttpController);
    executeAsync(): Promise<HttpResponseMessage>;
}
