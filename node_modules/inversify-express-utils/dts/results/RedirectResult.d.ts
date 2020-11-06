/// <reference types="node" />
import { HttpResponseMessage } from "../httpResponseMessage";
import { interfaces } from "../interfaces";
import { URL } from "url";
import { BaseHttpController } from "../base_http_controller";
export default class RedirectResult implements interfaces.IHttpActionResult {
    private location;
    private apiController;
    constructor(location: string | URL, apiController: BaseHttpController);
    executeAsync(): Promise<HttpResponseMessage>;
}
