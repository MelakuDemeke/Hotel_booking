import express from "express"
import dotenv from "dotenv"

const app = express()
dotenv.config()

app.get("/", (req, res)=>{
    res.send("Hello")
})

app.listen(8100, ()=>{console.log("server started at http://localhost:8100")})