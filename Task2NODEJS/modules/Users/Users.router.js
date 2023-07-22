import {Router} from 'express'
import * as userController from './Users.controller.js'

const router=Router()

router.get('/user',userController.getAllUsers);
router.post('/user',userController.addUsers);
router.get('/user/:id',userController.getUserById)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)

router.get('user/:userid')

export default router;