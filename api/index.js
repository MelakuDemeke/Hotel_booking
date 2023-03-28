import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

// Routes
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"


const app = express()
app.use(express.json())
dotenv.config()


const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("connected to mongo db")
    }catch(error){
        throw error
    }
};


app.get("/", (req, res)=>{
    res.send("Hello")
})

// Middlewares

app.use("/auth", authRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/rooms",roomsRoute);
app.use("/users",usersRoute);

app.listen(8100, ()=>{
    connect()
    console.log("server started at http://localhost:8100")
})