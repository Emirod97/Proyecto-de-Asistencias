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
        
        var asis = req.body.asistencia;
        var id_al = req.body.id_alumno;
        var grupo = req.body.grupo;
        var ind1 = req.body.indicador_uno;
        var indi2 = req.body.indicador_dos;
        var indi3 = req.body.indicador_tres;
        var indi4 = req.body.indicador_cuatro;
        var comen = req.body.comentario;

       console.log(req.body);
       

        await pool.query(`CALL registrarAsistencia (${asis} ,${id_al},'${grupo}','${ind1}','${indi2}','${indi3}','${indi4}','${comen}')`);
        res.json({message:'Attendance Capturated'});
    }
}

export const attendanceController = new AttendanceController();