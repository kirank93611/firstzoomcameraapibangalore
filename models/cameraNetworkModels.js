const mongoose = require('mongoose');
const camera = require('./cameraModels')
const cameraNetworkSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please enter the camera name"]
        },
        description: {
            type: String,
            required: [true, "please Describe for what this camera is used "]
        },
        url: {
            type: String,
            required: [true, "please enter the endpoint url of the camera"]
        },
        cameras: [{
            type: mongoose.Schema.Types.ObjectId, ref: "camera"
        }]
    },
    {
        timestamp: true
    }
)

const cameranetwork = mongoose.model('cameranetwork', cameraNetworkSchema);

module.exports = cameranetwork;