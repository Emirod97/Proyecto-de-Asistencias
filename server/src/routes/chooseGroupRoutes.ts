import {Router} from 'express';
import  groupController  from '../controllers/groupController';

class ChoseGroupeRoutes{

    router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', groupController.getGroups);
        this.router.post('/', groupController.postGroups);
        this.router.get('/', groupController.getUsers);
    }
}
const choseGroupeRoutes = new ChoseGroupeRoutes();
export default choseGroupeRoutes.router;