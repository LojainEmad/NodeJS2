import {Router} from 'express'
import * as tagController from './Users.controller.js'

const router=Router()

router.get('/tag',tagController.getAllTags);
router.post('/tag',tagController.addTags);
router.get('/tag/:id',tagController.getTagById)
router.delete('/tag/:id',tagController.deleteTag)
router.put('/tag/:id',tagController.updateTag)


export default router;