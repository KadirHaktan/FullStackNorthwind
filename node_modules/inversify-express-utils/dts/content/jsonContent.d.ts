import { HttpContent } from "./httpContent";
export declare class JsonContent extends HttpContent {
    private mediaType;
    private content;
    constructor(content: any);
    constructor(content: any, mediaType: string);
    readAsStringAsync(): Promise<string>;
}
