/// <reference types="node" />
import { OutgoingHttpHeaders } from "http";
import { HttpContent } from "./content/httpContent";
export declare class HttpResponseMessage {
    private _content;
    private _headers;
    headers: OutgoingHttpHeaders;
    content: HttpContent;
    private _statusCode;
    statusCode: number;
    constructor(statusCode?: number);
}
