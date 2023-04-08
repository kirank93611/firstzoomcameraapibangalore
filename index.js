import express from 'express'
import bodyParser from 'body-parser'
import cameraRoutes from './routes/camera.js'
//initializing express application
const app=express();

//specifing the PORT of the application
const PORT=3000;

//initializing the body Parser middleware
app.use(bodyParser.json());

//using the new routes that have been created
app.use('/cameras',cameraRoutes);
app.get('/',(req,res)=>res.send('hello from Homepage.'));
//making our application listen for the incoming requests
app.listen(PORT,()=>console.log(`server on port http://locahost${PORT}`));