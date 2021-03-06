"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GroupController {
    getGroups(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const grupo = yield database_1.default.query('SELECT materias_activas.grupo, materias_activas.id_docente, docentes.nombre, materias.desc_materia, materias_activas.tipo FROM materias_activas, docentes, materias WHERE materias_activas.id_docente = ? AND ? = docentes.id_docente AND materias_activas.clave_materia = materias.clave_materia', [id, id]);
            console.log(grupo);
            res.json(grupo);
        });
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const grupo = yield database_1.default.query('SELECT * FROM login;');
            res.json(grupo);
        });
    }
    postGroups(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO materias_activas set ?', [req.body]);
            res.json({ message: 'group created' });
        });
    }
}
const groupController = new GroupController();
exports.default = groupController;
