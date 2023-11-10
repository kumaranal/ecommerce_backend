import mongoose from "mongoose";

let order_productSchema=new mongoose.Schema({
    product:{  
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required:true
    },
    quantity:{
        type: Number,
        default:1,
        required:true
    }
})


let orderSchema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    order_product:[
        order_productSchema
    ]
},{
    timestamps:true
})

const Order=mongoose.model("Order",orderSchema)

export default Order;


// {
//     "user": "61234abcd56789ef012345678", // Replace with a valid ObjectId for the user
//     "order_product": [
//       {
//         "product": "61234efg56789hi012345678", // Replace with a valid ObjectId for the product
//         "quantity": 3
//       },
//       {
//         "product": "61234xyz56789uvw012345678", // Replace with a valid ObjectId for another product
//         "quantity": 2
//       }
//     ]
//   }
  