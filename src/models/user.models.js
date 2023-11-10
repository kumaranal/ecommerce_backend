import mongoose from "mongoose";

let userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        uppercase:true
    },
    email:{
        type:String,
        required:true,
    },
    passward:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        // required:true
    }
},{
    timestamps:true
})

const User=mongoose.model("User",userSchema)

export default User;