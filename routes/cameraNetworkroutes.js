const express = require('express')
//initializing the router
const router = express.Router()
const cameranetwork = require('../models/cameraNetworkModels')
const camera = require('../models/cameraModels')

//this below get to fetch all the cameranetwork from the database
router.get('/cameranetwork', async (req, res) => {
    try {
        const cameranetworks = await cameranetwork.find({}).populate('cameranetworkid')
        res.status(200).json(cameranetworks)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//this below url is to fetch the specific camera from the database
router.get('/cameranetwork/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const cameranetworks = await cameranetwork.findById(id).populate('cameranetworkid')
        res.status(200).json(cameranetworks)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//below to create a camera from the database
router.post('/cameranetwork', async (req, res) => {
    try {
        const camera = await cameranetwork.create(req.body)
        await camera.save();
        res.status(200).json(camera);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
})

//below to create a camera from the database
router.post('/cameranetworks/camera', async (req, res) => {
    try {
        const cam = await camera.findById(req.body.cameraId)
        if (!cam) return res.status(404).send({ message: "Camera not found" })

        const cameraNetwork = await cameranetwork.findById(req.body.cameraNetworkId)
        if (!cameraNetwork) return res.status(404).send({ message: "Camera Network not found" })

        cameraNetwork.cameras = cameraNetwork.cameras.concat(cam._id)
        console.log(cameraNetwork)

        await cameraNetwork.save()

        res.status(200).json(cameraNetwork);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
})

//to update a camera detail
router.put('/cameranetwork/:id', async (req, res) => {
    try {
        console.log("ok")
        const { id } = req.params;
        const camera = await cameranetwork.findById(id);
        //cannot find any camera in database
        if (!camera) {
            return res.status(404).json({ message: `cannot find camera with ${id}` })

        }
        let updates = Object.keys(req.body);
        updates.forEach((update) => (camera[update] = req.body[update]));
        await camera.save()
        res.status(200).json(camera);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/cameranetwork/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const camera = await cameranetwork.findByIdAndDelete(id);
        if (!camera) {
            return res.status(404).json({ message: `cannot find any camera to delete by ${id}` })
        }
        res.status(200).json(camera);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
module.exports = router