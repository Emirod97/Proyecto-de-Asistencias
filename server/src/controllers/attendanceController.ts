import {Request, Response} from 'express';

import pool from '../database';

class AttendanceController {


    public async getStudents (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const grupo = await pool.query('SELECT alumnos.id_alumno, alumnos.nombre, alumnos.apellido_paterno, alumnos.apellido_materno FROM alumnos, lista_alumnos WHERE alumnos.id_alumno = lista_alumnos.id_alumno AND lista_alumnos.grupo = ?', [id]);
        console.log(grupo);
        res.json(grupo);
        
    }

    public async postAttendance (req: Request, res: Response): Promise<void> {
        
        var asis = req.body._asistencia;
        var id_al = req.body._id_alumno;
        var grupo = req.body._grupo;
        var ind1 = req.body._indicador_uno;
        var indi2 = req.body._indicador_dos;
        var indi3 = req.body._indicador_tres;
        var indi4 = req.body._indicador_cuatr;
        var comen = req.body._comentario;

       console.log(req.body);
       

        await pool.query(`CALL registrarAsistencia (${asis} ,${id_al},'${grupo}','${ind1}','${indi2}','${indi3}','${indi4}','${comen}')`);
        res.json({message:'group created'});
    }
}

export const attendanceController = new AttendanceController();