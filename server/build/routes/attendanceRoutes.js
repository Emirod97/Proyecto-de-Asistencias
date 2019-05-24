"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AttendanceRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Attendance'));
    }
}
const attendanceRoutes = new AttendanceRoutes();
exports.default = attendanceRoutes.router;
