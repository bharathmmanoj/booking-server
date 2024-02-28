import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";

const router = express.Router();

// create 
router.post("/",verifyAdmin, createRoom);
//update
router.put("/:id",verifyAdmin,updateRoom);
//Delete
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);
// Get
router.get("/:id", getRoom);
// get All
router.get("/", getRooms);

export default router