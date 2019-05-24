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
class AttendanceController {
    getStudents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const grupo = yield database_1.default.query('SELECT alumnos.id_alumno, alumnos.nombre, alumnos.apellido_paterno, alumnos.apellido_materno FROM alumnos, lista_alumnos WHERE alumnos.id_alumno = lista_alumnos.id_alumno AND lista_alumnos.grupo = ?', [id]);
            console.log(grupo);
            res.json(grupo);
        });
    }
    postAttendance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var asis = req.body._asistencia;
            var id_al = req.body._id_alumno;
            var grupo = req.body._grupo;
            var ind1 = req.body._indicador_uno;
            var indi2 = req.body._indicador_dos;
            var indi3 = req.body._indicador_tres;
            var indi4 = req.body._indicador_cuatr;
            var comen = req.body._comentario;
            console.log(req.body);
            yield database_1.default.query(`CALL registrarAsistencia (${asis} ,${id_al},'${grupo}','${ind1}','${indi2}','${indi3}','${indi4}','${comen}')`);
            res.json({ message: 'group created' });
        });
    }
}
exports.attendanceController = new AttendanceController();
