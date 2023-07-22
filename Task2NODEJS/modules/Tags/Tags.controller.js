import connection from '../../DB/connection.js'
import executeQuery from '../../DB/dbHelper.js'

export async function getAllTags(req,res){
    try {
        const query='SELECT * FROM Tags'
        const params=[name]
        const result= await executeQuery( query , params );
        res.json({result})
        
    } catch (error) {
        res.json({message:error.message, error})
    }
   
}

export async function addTags(req,res){
    try {
        const{post_id,name}=req.body
        const query='INSERT INTO Tags (name) VALUES(?)'
        const params ='[name]'
        const result =await executeQuery(query.params)
        res.json({result})
    } catch (error) {
        res.json({message:error.message, error})
    }
   
}

export async function getTagById(req,res){
    try {
        const {id}=req.params
        const query='SELECT * FROM Tags WHERE id=?'
        const params=[id]
        const result=await executeQuery(query,params)
        res.json({result})
    } catch (error) {
        res.json({message:error.message, error})
    }
}

export async function deleteTag(req,res){
    try {
        const {id} = req.params;
        const query='DELETE FROM Tags WHERE id=? '
        const params=[id];
        const result =await executeQuery(query,params);
        if(result.affectedRows)
        res.json({message:"Tag Deleted"})
        else
        res.json({message:"Invalid ID"})
    } catch (error) {
        res.json({message:error.message, error})
    }
}

export async function updateTag(req,res){
    try {
        const{name}=req.body
        const{id}=req.params;
        const query='UPDATE Tags SET name=? WHERE id=?'
        const params=[name]
        const result=await executeQuery(query,params)
        if(result.affectedRows)
        res.json({message:"Tag Updated"})
        else
        res.json({message:"Invalid ID"})
    } catch (error) {
        res.json({message:error.message, error})
    }
}