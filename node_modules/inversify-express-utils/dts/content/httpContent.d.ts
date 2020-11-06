/// <reference types="node" />
import { OutgoingHttpHeaders } from "http";
export declare abstract class HttpContent {
    private _headers;
    readonly headers: OutgoingHttpHeaders;
    abstract readAsStringAsync(): Promise<string>;
}
