import express from 'express'
import userRouter from './modules/Users/Users.router.js'
import postRouter from './modules/Posts/Posts.router.js'
import tagRouter from './modules/Posts/Posts.router.js'
import mysql2 from 'mysql2';

const app=express()


app.use(express.json())



//app.get('/user')

app.use(userRouter) 
app.use(postRouter)
app.use(tagRouter)

app.listen(3000 ,() =>
    console.log('App is running') 
)