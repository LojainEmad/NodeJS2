import connection from '../../DB/connection.js'
import executeQuery from '../../DB/dbHelper.js'

export async function getAllUsers(req,res){
    try {
        const query='SELECT * FROM Users'
        const params=[]
        const result= await executeQuery( query , params );
        res.json({result})
        
    } catch (error) {
        res.json({message:error.message, error})
    }
}

export async function addUsers(req,res){
    try {
        const{name , email}=req.body
        const query='INSERT INTO Users (name,email) VALUES(?,?)'
        const params ='[name, email]'
        const result =await executeQuery(query.params)
        res.json({result})
    } catch (error) {
        res.json({message:error.message, error})
    }
   
}

export async function getUserById(req,res){
    try {
        const {id}=req.params
        const query='SELECT * FROM Users WHERE id=?'
        const params=[id]
        const result=await executeQuery(query,params)
        res.json({result})
    } catch (error) {
        res.json({message:error.message, error})
    }
}

export async function deleteUser(req,res){
    try {
        const {id} = req.params;
        const query='DELETE FROM Users WHERE id=? '
        const params=[id];
        const result =await executeQuery(query,params);
        if(result.affectedRows)
        res.json({message:"User Deleted"})
        else
        res.json({message:"Invalid ID"})
    } catch (error) {
        res.json({message:error.message, error})
    }
}

export async function updateUser(req,res){
    try {
        const{name , email}=req.body
        const{id}=req.params;
        const query='UPDATE Users SET name=? , email=? WHERE id=?'
        const params=[name , email , id]
        const result=await executeQuery(query,params)
        if(result.affectedRows)
        res.json({message:"User Updated"})
        else
        res.json({message:"Invalid ID"})
    } catch (error) {
        res.json({message:error.message, error})
    }
}

export async function getPostsByUserId(req,res){
    try {
       const {user_id}=req.params;
       const User_query='SELECT post_id FROM Users WHERE user_id= ?'
       const user_params=[user_id];
       const userResult=await executeQuery(User_query,user_params);
       const post_id=userResult[0].postid;
       const post_query= 'SELECT * FROM Posts WHERE id= ?'
       const post_params=[post_id]
       const post_result=await executeQuery(post_query,post_params);
       res.json({post_result});
    } catch (error) {
        res.json({message:error.message, error})
    }
}