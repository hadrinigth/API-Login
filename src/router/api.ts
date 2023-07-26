import { Router,} from "express";
import * as UserController from '../controller/userController'
import * as loginController from '../controller/loginController'
const router = Router();


//LOGIN
router.post('/api/login', loginController.login);


//CRUD
router.get('/api/ping', UserController.ping)

router.get('/api/', UserController.View)
router.post('/api/create', UserController.Create)
router.put('/api/up/:id', UserController.Update)
router.delete('/api/:id', UserController.Remove)




export default router;