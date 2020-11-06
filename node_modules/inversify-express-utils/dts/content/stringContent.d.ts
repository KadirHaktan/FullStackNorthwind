import { HttpContent } from "./httpContent";
export declare class StringContent extends HttpContent {
    private content;
    private mediaType;
    constructor(content: string);
    constructor(content: string, mediaType: string);
    readAsStringAsync(): Promise<string>;
}
