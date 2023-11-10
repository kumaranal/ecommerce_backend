import express from "express";
import {createfn,findfn,selectiveFindfn,updatefn,deletefn} from "../controllers/collection.controller.js"
const router=express.Router()

router.get('/collection',findfn)
router.get('/collection/:coll',selectiveFindfn)
router.post('/collection',createfn)
router.put('/collection/:coll',updatefn)
router.delete('/collection/:coll',deletefn)

export default router;