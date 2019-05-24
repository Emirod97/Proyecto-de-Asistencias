"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attendanceController_1 = require("../controllers/attendanceController");
class AttendaceRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', attendanceController_1.attendanceController.getStudents);
        this.router.post('/', attendanceController_1.attendanceController.postAttendance);
    }
}
const attendaceRoutes = new AttendaceRoutes();
exports.default = attendaceRoutes.router;
