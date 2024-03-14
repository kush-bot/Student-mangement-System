require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const pages = require('./routes/routes')
const multer = require('multer')
const userRoutes = require('./routes/user')



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
project.use('/project/user',userRoutes)

//connect to database
mongoose.connect(process.env.REACT_APP_URI)
.then(()=>{
    project.listen(process.env.REACT_PORT, ()=>
    {
        console.log('connected to Database and listening on port  ',process.env.REACT_PORT)
    })
}).catch((error)=>{
    console.log(error)
})




