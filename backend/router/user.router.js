import express from "express";
import {createuser,getuser,dlduser,updateuser} from "../controller/userdata.contoller.js"
const router = express.Router();

router.post("/createuser",createuser)
router.get("/",getuser)
router.delete("/dld/:id",dlduser)
router.put("/update/:id",updateuser)


export default router
