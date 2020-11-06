var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { injectable } from "inversify";
import { injectHttpContext } from "./decorators";
import { CreatedNegotiatedContentResult, ConflictResult, OkNegotiatedContentResult, OkResult, BadRequestErrorMessageResult, BadRequestResult, ExceptionResult, InternalServerErrorResult, NotFoundResult, RedirectResult, ResponseMessageResult, StatusCodeResult, JsonResult } from "./results";
import { OK } from "http-status-codes";
var BaseHttpController = /** @class */ (function () {
    function BaseHttpController() {
    }
    BaseHttpController.prototype.created = function (location, content) {
        return new CreatedNegotiatedContentResult(location, content, this);
    };
    BaseHttpController.prototype.conflict = function () {
        return new ConflictResult(this);
    };
    BaseHttpController.prototype.ok = function (content) {
        return content === undefined ?
            new OkResult(this) :
            new OkNegotiatedContentResult(content, this);
    };
    BaseHttpController.prototype.badRequest = function (message) {
        return message === undefined ?
            new BadRequestResult(this) :
            new BadRequestErrorMessageResult(message, this);
    };
    BaseHttpController.prototype.internalServerError = function (error) {
        return error ? new ExceptionResult(error, this) : new InternalServerErrorResult(this);
    };
    BaseHttpController.prototype.notFound = function () {
        return new NotFoundResult(this);
    };
    BaseHttpController.prototype.redirect = function (uri) {
        return new RedirectResult(uri, this);
    };
    BaseHttpController.prototype.responseMessage = function (message) {
        return new ResponseMessageResult(message, this);
    };
    BaseHttpController.prototype.statusCode = function (statusCode) {
        return new StatusCodeResult(statusCode, this);
    };
    BaseHttpController.prototype.json = function (content, statusCode) {
        if (statusCode === void 0) { statusCode = OK; }
        return new JsonResult(content, statusCode, this);
    };
    __decorate([
        injectHttpContext,
        __metadata("design:type", Object)
    ], BaseHttpController.prototype, "httpContext", void 0);
    BaseHttpController = __decorate([
        injectable()
    ], BaseHttpController);
    return BaseHttpController;
}());
export { BaseHttpController };
