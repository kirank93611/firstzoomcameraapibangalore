const mongoose=require('mongoose');

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
        }
    },
    {
        timestamp:true
    }
)

const camera=mongoose.model('camera',cameraSchema);

module.exports=camera;