import express from "express";
import {createfn,findfn,selectiveFindfn,updatefn,deletefn} from "../controllers/product.controller.js"
const router=express.Router()

router.get('/product',findfn)
router.get('/product/:name',selectiveFindfn)
router.post('/product',createfn)
router.put('/product/:name',updatefn)
router.delete('/product/:name',deletefn)

export default router;