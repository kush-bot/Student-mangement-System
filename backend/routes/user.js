const express = require('express')

//controller functions
const { loginUser,signupUser} = require('../models/controllers/userControllers')
const router = express.Router()
router.use(express.json())
//login route

router.post('/login',loginUser)

router.post('/signup', signupUser)

module.exports = router