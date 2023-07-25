import { Router,} from "express";
import * as UserController from '../controller/userController'

const router = Router();

//CRUD


router.get('/api/', UserController.View)
router.post('/api/create', UserController.Create)
router.put('/api/up/:id', UserController.Update)
router.delete('/api/:id', UserController.Remove)




export default router;