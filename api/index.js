import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

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

app.listen(8100, ()=>{
    connect()
    console.log("server started at http://localhost:8100")
})