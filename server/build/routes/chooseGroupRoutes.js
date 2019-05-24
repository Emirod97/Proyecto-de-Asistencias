"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const groupController_1 = __importDefault(require("../controllers/groupController"));
class ChoseGroupeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', groupController_1.default.getGroups);
        this.router.post('/', groupController_1.default.postGroups);
    }
}
const choseGroupeRoutes = new ChoseGroupeRoutes();
exports.default = choseGroupeRoutes.router;
