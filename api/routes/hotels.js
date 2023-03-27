import express from "express"

const router = express.Router()

router.get("/", (req,res) => {
    res.send("this is hotels route")
})

export default router