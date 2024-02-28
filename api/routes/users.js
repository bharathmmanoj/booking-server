import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//router.get("/checkauthentication", verifyToken, (req,res,next)=>{
  //  res.send("hello user you are logged in ")
//})

//router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
  //  res.send("hello user you are logged in and can delete the account ")
//})

//router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
  //  res.send("hello admin you are logged in and can delete the account ")
//})
//update
router.put("/:id",verifyUser, updateUser);
//Delete
router.delete("/:id",verifyUser, deleteUser);
// Get
router.get("/:id",verifyUser, getUser);
// get All
router.get("/",verifyAdmin, getUsers);

export default router