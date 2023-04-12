import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

// Routes
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"


const app = express()
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
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);
app.use("/api/users",usersRoute);

// error handling middlewarea

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something went wrong"
    res.status(errorStatus).json(errorMessage);
});


app.listen(8100, ()=>{
    connect()
    console.log("server started at http://localhost:8100")
})