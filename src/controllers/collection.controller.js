import Collection from "../models/collection.models.js"

const createfn=async(req,res)=>{
    try{
        //date must be dd/mm/yyyy format
        const data = req.body;
        console.log(data)
        Collection.create(data)
        res.status(200).json({ data: data });

    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Error' });

    }
}

const findfn=async(req,res)=>{
    try{
        const data = await Collection.find({})
        // console.log(birthdayPersons)
        res.status(200).json({ data: data });

    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Error' });

    }
}


const selectiveFindfn=async(req,res)=>{
    try{
        const reqName=req.params.coll
        // console.log(reqName)
        let data=reqName.toUpperCase();   
         const regex = new RegExp(data); // 'i' for case-insensitive match
        // console.log(regex)
        // Find and delete documents matching the name using the regex
        const result = await Collection.find({ "collectionName": regex });
        res.status(200).json({ data: result });
    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Error' });

    }
}

const updatefn=async(req,res)=>{
    try{
    const reqName = req.params.coll;
    let data=reqName.toUpperCase();   
    const updatedData = req.body;
    const regex = new RegExp(data); // 'i' for case-insensitive match
    Collection.updateOne({"collectionName": regex},{$set: updatedData}, { new: true })
    .then((data)=>{
        res.status(200).json({ data: result });
    })
    .catch((err)=>{
        res.status(500).json({ error: 'Error' });
     } )
    }
    catch(err){
        res.status(500).json({ error: 'Error' });

    }
}

const deletefn=async(req,res)=>{
    try{
    const reqName=req.params.coll;
    let data=reqName.toUpperCase();   
    // console.log(name)
    // Collection.deleteMany({name:})
    const regex = new RegExp(data); // 'i' for case-insensitive match
    // Find and delete documents matching the name using the regex
    const result = await Collection.deleteMany({ "collectionName": regex });
    res.status(200).json({ data: result });
    }
    catch(err){
        res.status(500).json({ error: 'Error' });
    }

}


export { createfn,findfn,selectiveFindfn,updatefn,deletefn };
