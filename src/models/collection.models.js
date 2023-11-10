import mongoose from "mongoose";

let collectionSchema=new mongoose.Schema({
    collectionName:{
        type:String,
        required:true,
        uppercase:true
    }
},{
    timestamps:true
})

const Collection=mongoose.model("Collection",collectionSchema)

export default Collection;