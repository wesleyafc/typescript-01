interface Course {
    name: string;
    //duration is optional
    duration?: number;
    educator: string
}
//create class
class CreateCourseService {
    execute({ duration = 8/*default value */, educator, name }: Course) {
        console.log(name, duration, educator)
    }
}
//export class CreateCourseService
export default new CreateCourseService();