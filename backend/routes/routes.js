const express = require('express')
const profileData = require('../models/stdProfile')
const {createProfile,getprofileInfo} = require('../models/controllers/Profilecontrollers')

const router = express.Router()
router.use(express.json())

router.get('/profile/:id',getprofileInfo)
 
router.get('/attendence/:id',(req,res) =>{
    res.json({msg:'hello from attedence info'})
}) 

router.get('/timetable/:id',(req,res)=>{
    res.json({msg:'hello your getting timetable'})
})

router.post('/add',createProfile)
module.exports = router