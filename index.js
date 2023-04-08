const express=require('express')
const bodyParser= require('body-parser')
const cameraRoutes= require('./routes/camera.js')
//mongoose 
const mongoose=require('mongoose')
//initializing express application
const app=express();
//using middleware for serializtion into json
app.use(express.json())
//specifing the PORT of the application
const PORT=3000;

//initializing the body Parser middleware
app.use(bodyParser.json());

//using the new routes that have been created
app.use('/',cameraRoutes);
// app.get('/',(req,res)=>res.send('hello from Homepage.'));
 

//mongoose connection
mongoose.set("strictQuery",false)
mongoose.
connect('mongodb+srv://kiranambujashoba:qj2XxCRTO0QWxO9P@cameracluster.axosjy0.mongodb.net/Camera-API?retryWrites=true&w=majority')
.then(()=>{
    //making our application listen for the incoming requests
    app.listen(PORT,()=>console.log(`server on port http://localhost:${PORT}`));
    console.log('connected to MongoDB')
}).catch((error)=>{
    console.log(error)
})