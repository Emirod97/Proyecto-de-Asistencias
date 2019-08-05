import {Request, Response} from 'express';

import pool from '../database';

class GroupController {
    public async getGroups (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const grupo = await pool.query('SELECT materias_activas.grupo, materias_activas.id_docente, docentes.nombre, materias.desc_materia, materias_activas.tipo FROM materias_activas, docentes, materias WHERE materias_activas.id_docente = ? AND ? = docentes.id_docente AND materias_activas.clave_materia = materias.clave_materia', [id, id]);
        console.log(grupo);
        res.json(grupo); 
    }

    public async getUsers (req: Request, res: Response): Promise<void>{
        const grupo = await pool.query('SELECT * FROM login;');
        res.json(grupo);
    }

    public async postGroups (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO materias_activas set ?', [req.body]);
        res.json({message:'group created'});
    }
}

const groupController = new GroupController();
export default groupController;