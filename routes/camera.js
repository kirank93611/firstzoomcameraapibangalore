const express =require('express')
//initializing the router
const router=express.Router()
const cameras=require('../models/cameraModels')
// const cameras=[
//     {
//         name:"sp road",
//         description:"full view camera of SP road",
//         url:"http://urlllll.com"
//     }

//this below get to fetch all the cameras from the database
router.get('/cameras',async(req,res)=>{
    try {
        const camerass=await cameras.find({})
        res.status(200).json(camerass)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
//this below url is to fetch the specific camera from the database
router.get('/cameras/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const camerass=await cameras.findById(id)
        res.status(200).json(camerass)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
//below to create a camera from the database
router.post('/cameras',async(req,res)=>{
    try {
        const camera=await cameras.create(req.body)
        res.status(200).json(camera);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message})
    }
})

module.exports = router