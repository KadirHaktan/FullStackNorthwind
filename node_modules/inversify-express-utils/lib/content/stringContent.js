"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var httpContent_1 = require("./httpContent");
var DEFAULT_MEDIA_TYPE = "text/plain";
var StringContent = /** @class */ (function (_super) {
    __extends(StringContent, _super);
    function StringContent(content, mediaType) {
        if (mediaType === void 0) { mediaType = DEFAULT_MEDIA_TYPE; }
        var _this = _super.call(this) || this;
        _this.content = content;
        _this.mediaType = mediaType;
        _this.headers["content-type"] = mediaType;
        return _this;
    }
    StringContent.prototype.readAsStringAsync = function () {
        return Promise.resolve(this.content);
    };
    return StringContent;
}(httpContent_1.HttpContent));
exports.StringContent = StringContent;
