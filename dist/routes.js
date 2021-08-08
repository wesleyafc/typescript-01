"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
//import class
var CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(request, response) {
    //call de class
    CreateCourseService_1.default.execute({
        name: "ts wtf",
        educator: "alien",
        duration: 9999999
    });
    CreateCourseService_1.default.execute({
        name: "ts very bad",
        educator: "hater",
    });
    return response.send();
}
exports.createCourse = createCourse;
