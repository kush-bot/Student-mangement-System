require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const pages = require('./routes/routes')
const multer = require('multer')



//express application
const project = express()

project.use((req,res,next) =>{
    console.log(req.path, res.methode)
  
    next()
})
const strg = multer.diskStorage({
    destination:'uploads'
})

project.use('/project/home/',pages)

//connect to database
mongoose.connect(process.env.REACT_APP_URI)
.then(()=>{
    project.listen(process.env.REACT_PORT, ()=>
    {
        console.log('listening to port ',process.env.REACT_PORT)
    })
}).catch((error)=>{
    console.log(error)
})


//


