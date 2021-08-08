"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//create class
var CreateCourseService = /** @class */ (function () {
    function CreateCourseService() {
    }
    CreateCourseService.prototype.execute = function (_a) {
        var _b = _a.duration /*default value */, duration = _b === void 0 ? 8 : _b /*default value */, educator = _a.educator, name = _a.name;
        console.log(name, duration, educator);
    };
    return CreateCourseService;
}());
//export class CreateCourseService
exports.default = new CreateCourseService();
