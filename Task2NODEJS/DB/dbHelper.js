import connection from "./connection.js";



function executeQuery(query,params){
  return new Promise((resolve,reject)=>{
        connection.execute(query,params,(err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })


}
 export default executeQuery