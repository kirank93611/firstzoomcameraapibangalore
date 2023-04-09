const express =require('express')
//initializing the router
const router=express.Router()
const cameras=require('../models/cameraModels')
const cameranetwork=require('../models/cameraNetworkModels')
// const cameras=[
//     {
//         name:"sp road",
//         description:"full view camera of SP road",
//         url:"http://urlllll.com"
//     }

//this below get to fetch all the cameras from the database
router.get('/cameras',async(req,res)=>{
    try {
        const camerass=await cameras.find({}).populate('cameranetworkid')
        res.status(200).json(camerass)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
//this below url is to fetch the specific camera from the database
router.get('/cameras/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const camerass=await cameras.findById(id).populate('cameranetworkid')
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

//to update a camera detail
router.put('/cameras/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const camera=await cameras.findByIdAndUpdate(id,req.body);
        //cannot find any camera in database
        if(!camera){
            return res.status(404).json({message:`cannot find camera with ${id}`})

        }
        const updatedcamera=await cameras.findById(id);
        res.status(200).json(updatedcamera);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.delete('/cameras/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const camera=await cameras.findByIdAndDelete(id); 
        if(!camera){
            return res.status(404).json({message:`cannot find any camera to delete by ${id}`})
        }
        res.status(200).json(camera);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
module.exports = router