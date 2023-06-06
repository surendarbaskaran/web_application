const express=require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended :false}));
const dbService=require('./dbService');


app.get('/getAll',(request,response)=>{
    // console.log('test success');
    // response.json({success:true});
    const db= dbService.getDbserviceInstance();
    const results=db.getAllData();

})



app.listen(5000,()=>console.log("app is running ..."));