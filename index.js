const express =require("express");
const app=express();
const PORT=5002;
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/storageApp")
.then(()=>{
    console.log("connected to the database");
})
.catch((err)=>{
    console.error(err);
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})