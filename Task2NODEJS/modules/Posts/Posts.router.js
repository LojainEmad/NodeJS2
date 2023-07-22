import {Router} from 'express'
import * as postcontroller from './Posts.controller.js'

const router=Router()

router.get('/post',postcontroller.getAllPosts);
router.post('/post',postcontroller.addPost);
router.get('/post/:id',postcontroller.getPostById)
router.delete('/post/:id',postcontroller.deletePost)
router.put('/post/:id',postcontroller.updatePost)



export default router;