const mongoose=require("mongoose")

const signinSchema=new mongoose.Schema({
       name:{
        type:String,
        required:true
       },
       email:{
        type:String,
        required:true
       },
       password:{
        type:String,
        required:true
       }
})

const Signin=mongoose.model('Signin',signinSchema)
module.exports = Signin;