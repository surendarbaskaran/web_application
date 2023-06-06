const mysql=require('mysql');
const dotenv=require( 'dotenv');
dotenv.config();
let instance=null;
const connection=mysql.createConnection({
    host:process.env.DBHOST,
    user:process.env.DBUSER,
    password:process.env.DBPASSWORD,
    database:process.env.DATABASE,
    port:process.env.DBPORT
});

connection.connect((err)=>{
    if(err){
        console.log(err.message);
    }
    //console.log('db'+connection.state);
});


class DbService{
    static getDbserviceInstance(){
        return instance?instance:new DbService();
    }

    async getAllData(){
        try {
            const response=await new Promise((resolve,reject)=>{
                const query = "SELECT *  FROM `crud_table`;";
                connection.query(query,(err,results)=>{
                    if(err) reject(new Error(err.message));
                    resolve(results);
                })
            }) ;
            //console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports=DbService;