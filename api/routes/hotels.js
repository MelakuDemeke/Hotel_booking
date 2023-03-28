import express from "express"

// models
import Hotel from "../models/Hotel.js"

const router = express.Router()

//TODO add CRETATE UPDATE DELETE GET GETALL routes

// CREATE
router.post("/", async (req, res) => {
    const newHotel = new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        res.status(500).json(err)
    }
})
// UPDATE
router.put("/:id", async (req, res) => {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
            );
        res.status(200).json(updatedHotel)
    }catch(err){
        res.status(500).json(err)
    }
})
// DELETE
// GET
// GET ALL


export default router