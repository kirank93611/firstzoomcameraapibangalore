import express from 'express'
//initializing the router
const router=express.Router()

const cameras=[
    {
        name:"sp road",
        description:"full view camera of SP road",
        url:"http://urlllll.com"
    }
]
router.get('/',(req,res)=>{
    console.log(cameras);
    res.send('Hello');
});

router.post('/',(req,res)=>{
    console.log('router reached');
    res.send('POST ROUTE REACHED')
})

export default router