import Product from "../models/product.models.js"
import mongoose from "mongoose";
import { Types } from 'mongoose';

const { ObjectId } = Types;
const createfn = async (req, res) => {
    try {
        const data = req.body;
        console.log(data)
        Product.create(data)
        res.status(200).json({ data: data });

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Error' });

    }
}

const findfn = async (req, res) => {
    try {
        const data = await Product.find({})
        // console.log(birthdayPersons)
        res.status(200).json({ data: data });

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Error' });

    }
}


const selectiveFindfn = async (req, res) => {
    try {
        const reqName = req.params.name
        // console.log(reqName)
        let data = reqName.toUpperCase();
        const regex = new RegExp(data); // 'i' for case-insensitive match
        // console.log(regex)
        // Find and delete documents matching the name using the regex
        const result = await Product.find({ "name": regex });
        res.status(200).json({ data: result });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Error' });

    }
}

const updatefn = async (req, res) => {
    try {
        const reqName = req.params.name;
        let data = reqName.toUpperCase();
        const updatedData = req.body;
        const regex = new RegExp(data); // 'i' for case-insensitive match
        Product.updateOne({ "name": regex }, { $set: updatedData }, { new: true })
            .then((data) => {
                res.status(200).json({ data: `update done` });
            })
            .catch((err) => {
                res.status(500).json({ error: 'Error' });
            })
    }
    catch (err) {
        res.status(500).json({ error: err });

    }
}

const selectiveUpdatefn = async (product, quantity,session) => {
    try {
        // console.log(product, quantity)
        quantity = quantity * -1;
        const objectId = new mongoose.mongo.ObjectId(product)
        // console.log(objectId)
        await Product.findByIdAndUpdate(objectId, { $inc: { "stock": quantity } }, { new: true,session })
            // await Product.findById(objectId)
            .then((data) => {
                // console.log(data, "data")
                return data;
            })
            .catch((err) => {
                console.log("err",err)
            })
    }
    catch (err) {
        console.log(err)
    }
}

const selectiveUpdateOnDeletefn = async (product, quantity,session) => {
    try {
        // console.log(product, quantity)
        quantity = quantity ;
        const objectId = new mongoose.mongo.ObjectId(product)
        // console.log(objectId)
        await Product.findByIdAndUpdate(objectId, { $inc: { "stock": quantity } }, { new: true,session })
            // await Product.findById(objectId)
            .then((data) => {
                // console.log(data, "data")
                return data;
            })
            .catch((err) => {
                console.log("err",err)
            })
    }
    catch (err) {
        console.log(err)
    }
}

const deletefn = async (req, res) => {
    try {
        const reqName = req.params.name;
        let data = reqName.toUpperCase();
        // console.log(name)
        const regex = new RegExp(data); // 'i' for case-insensitive match
        // Find and delete documents matching the name using the regex
        const result = await Product.deleteMany({ "name": regex });
        res.status(200).json({ data: result });
    }
    catch (err) {
        res.status(500).json({ error: 'Error' });
    }

}


export { createfn, findfn, selectiveFindfn, updatefn, deletefn, selectiveUpdatefn ,selectiveUpdateOnDeletefn};
