import { HttpResponseMessage } from "../httpResponseMessage";
import { interfaces } from "../interfaces";
import { BaseHttpController } from "../base_http_controller";
export default class OkNegotiatedContentResult<T> implements interfaces.IHttpActionResult {
    private content;
    private apiController;
    constructor(content: T, apiController: BaseHttpController);
    executeAsync(): Promise<HttpResponseMessage>;
}
