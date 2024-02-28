import express from "express";
import Hotel from "../models/Hotel.js"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
// create 
router.post("/",verifyAdmin, createHotel);
//update
router.put("/:id",verifyAdmin,updateHotel);
//Delete
router.delete("/:id",verifyAdmin, deleteHotel);
// Get
router.get("/:id", getHotel);
// get All
router.get("/", getHotels);
export default router