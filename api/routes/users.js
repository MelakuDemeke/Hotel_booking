import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.send("this route from users")
})

export default router