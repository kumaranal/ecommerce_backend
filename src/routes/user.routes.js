import express from "express";
import {createfn,findfn,selectiveFindfn,updatefn,deletefn} from "../controllers/user.controller.js"
const router=express.Router()

router.get('/user',findfn)
router.get('/user/:name',selectiveFindfn)
router.post('/user',createfn)
router.put('/user/:name',updatefn)
router.delete('/user/:name',deletefn)

export default router;