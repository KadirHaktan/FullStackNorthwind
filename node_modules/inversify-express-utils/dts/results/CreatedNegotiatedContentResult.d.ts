/// <reference types="node" />
import { HttpResponseMessage } from "../httpResponseMessage";
import { interfaces } from "../interfaces";
import { URL } from "url";
import { BaseHttpController } from "../base_http_controller";
export default class CreatedNegotiatedContentResult<T> implements interfaces.IHttpActionResult {
    private location;
    private content;
    private apiController;
    constructor(location: string | URL, content: T, apiController: BaseHttpController);
    executeAsync(): Promise<HttpResponseMessage>;
}
