import mongoose from "mongoose";
// import Collection from "./collection.models.js";
let productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        uppercase:true
    },
    price:{
        type:Number,
        default:0,
        required:true
    },
    stock:{
        type:Number,
        default:0,
        required:true
    },
    collectionName:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection",
        required:true
    }
    ]
},{
    timestamps:true
})

const Product=mongoose.model("Product",productSchema)

export default Product;



// {
//     "name":"ball",
//     "price":180,
//     "stock":12,
//     "collectionName":["654922466fb232a4625d8972"]
// }
