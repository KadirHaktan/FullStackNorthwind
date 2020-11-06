import { HttpResponseMessage } from "../httpResponseMessage";
import { interfaces } from "../interfaces";
import { BaseHttpController } from "../base_http_controller";
export default class BadRequestErrorMessageResult implements interfaces.IHttpActionResult {
    private message;
    private apiController;
    constructor(message: string, apiController: BaseHttpController);
    executeAsync(): Promise<HttpResponseMessage>;
}
