import Order from "../models/order.models.js"
import { selectiveUpdatefn,selectiveUpdateOnDeletefn } from "../controllers/product.controller.js"
import mongoose from "mongoose";

const createfn = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const data = req.body;
        const { user, order_product } = data
        // console.log(user, order_product)
        for (let i = 0; i < order_product.length; i++) {
            let { product, quantity } = order_product[i]
            // console.log(product,quantity)
            let data=await selectiveUpdatefn(product, quantity,session);
            // console.log(data)
        }
        await Order.create([data], {session})
        await session.commitTransaction();
        res.status(200).json({ data: data });

    } catch (err) {
        console.log("error",err)
        await session.abortTransaction();
        res.status(500).json({ error: 'Error' });

    }
    finally {
        session.endSession();
    }
}

const findfn = async (req, res) => {
    try {
        const data = await Order.find({})
        // console.log(birthdayPersons)
        res.status(200).json({ data: data });

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Error' });

    }
}


const selectiveFindfn = async (req, res) => {
    try {
        const reqId = req.params.id
        const result = await Order.findById(reqId);
        res.status(200).json({ data: result });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Error' });

    }
}

const updatefn = async (req, res) => {
    try {
        const reqId = req.params.id;
        const updatedData = req.body;
        Order.updateOne({"_id":reqId}, { $set: updatedData }, { new: true })
            .then((data) => {
                res.status(200).json({ data: result });
            })
            .catch((err) => {
                res.status(500).json({ error: 'Error' });
            })
    }
    catch (err) {
        res.status(500).json({ error: 'Error' });

    }
}

const deletefn = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const reqId = req.params.id;
        const data1 = await Order.findById(reqId);
        const data=data1.order_product
        // console.log(data)
        for (let i = 0; i < data.length; i++) {
            let { product, quantity,id } = data[i]
            console.log(product,quantity)
            let result1=await selectiveUpdatefn(product, quantity,session);
            // console.log(data)
        }
        const result = await Order.findByIdAndDelete(reqId);
        await session.commitTransaction();
        res.status(200).json({ data: data });
    }
    catch (err) {
        console.log("error",err)
        await session.abortTransaction();
        res.status(500).json({ error: 'Error' });
    }
    finally {
        session.endSession();
    }
}




export { createfn, findfn, selectiveFindfn, updatefn, deletefn };
