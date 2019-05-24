import {Router} from 'express';

import {attendanceController} from '../controllers/attendanceController';

class AttendaceRoutes{

    router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', attendanceController.getStudents );
        this.router.post('/', attendanceController.postAttendance);
    }
}
const attendaceRoutes = new AttendaceRoutes();
export default attendaceRoutes.router;