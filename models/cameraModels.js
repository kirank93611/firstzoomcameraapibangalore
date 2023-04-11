const mongoose=require('mongoose');
const cameranetwork=require('./cameraModels.js')
const cameraSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please enter the camera name"]
        },
        description:{
            type:String,
            required:[true,"please Describe for what this camera is used "]
        },
        url:{
            type:String,
            required:[true,"please enter the endpoint url of the camera"]
        },
        cameranetworkid:[{type:mongoose.Schema.Types.ObjectId,ref:'cameranetwork'}]
    },
    {
        timestamp:true
    }
)

const camera=mongoose.model('camera',cameraSchema);

module.exports=camera;