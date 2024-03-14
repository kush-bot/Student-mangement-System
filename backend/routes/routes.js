const express = require('express')
const profileData = require('../models/stdProfile')
const {createProfile,getprofileInfo,getloginfo} = require('../models/controllers/Profilecontrollers')
const usrdata = require('../models/userModel')
const { loginUser,signupUser} = require('../models/controllers/userControllers')

const router = express.Router()
router.use(express.json())

router.get('/profile/:id',getprofileInfo)
router.get('/users',getloginfo)
 
router.get('/attendence/:id',(req,res) =>{
    res.json({msg:'hello from attedence info'})
}) 
router.post('/login',loginUser)

router.post('/signup', signupUser)

router.get('/timetable/:id',(req,res)=>{
    res.json({msg:'hello your getting timetable'})
})

router.post('/add',createProfile)
module.exports = router