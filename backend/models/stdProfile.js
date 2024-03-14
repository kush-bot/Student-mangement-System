const mongoose = require('mongoose')
const Schema = mongoose.Schema
const profileData = new Schema({
    fname: {
        type: String,
        required: true
    },
    mname: {
        type: String,
        required: true
    },
    admNo: {
        type: String,
        required: true
    },

    ExamNo: {
        type: String,
        required: true
    },
    rollNo: {
        type: String,
        required: true
    },
    courseDetails: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
    },
    bloodGrp: {
        type: String,
        required: true,
    },
    DOB: {
        type: String,
        required: true

    },
    images:{
        data:Buffer,
        contentType:String

    },
    username:{
        type:String,
        required:true
    },
    



}, { timestamps: true })

module.exports = mongoose.model('profile', profileData)