//lib
import { Request, Response } from "express"
//import class
import CreateCourseService from "./CreateCourseService"

export function createCourse(request: Request, response: Response) {
    //call de class
    CreateCourseService.execute({
        name: "ts wtf",
        educator: "alien",
        duration: 9999999
    })
    CreateCourseService.execute({
        name: "ts very bad",
        educator: "hater",
    })

    return response.send()
}