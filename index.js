import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./api/routes/auth.js"
import hotelsRoute from "./api/routes/hotels.js"
import usersRoute from "./api/routes/users.js"
import roomsRoute from "./api/routes/rooms.js"
import cookieParser from "cookie-parser"
const app = express()
dotenv.config()

const connect = async() =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connecte to mongodb")
    } catch (error) {
        throw error;
    }
}
mongoose.connection.on("disconnected", ()=>{
    console.log("mongo db disconnected")
})
// use middleware
app.use(cookieParser);
app.use(express.json());

app.use("/api/auth" , authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/auth", roomsRoute)
app.use((err,req,res,next)=>{
 const errorStatus = err.status || 500
 const errorMessage = err.message || "something went wrong"
 return res.status(500).json({
    
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    
 })
})
app.listen(8800, ()=>{
    connect();
    console.log("connection succesful")
})