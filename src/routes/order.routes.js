import express from "express";
import {createfn,findfn,selectiveFindfn,updatefn,deletefn} from "../controllers/order.controller.js"
const router=express.Router()

router.get('/order',findfn)
router.get('/order/:id',selectiveFindfn)
router.post('/order',createfn)
router.put('/order/:id',updatefn)
router.delete('/order/:id',deletefn)

export default router;