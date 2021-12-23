// importing the libraries
const mongoose = require("mongoose")

// student schema
const studentSchema = new mongoose.Schema({

    rollnow:{
        type:String,
        maxlength:10,
        required:true,
        trim:true
    },
    name:{
        type:String,
        maxlength:100,
        required:true,
        trim:true
    },
    branch:{
        type:String,
        enum:['Mechanical','Chemical','Civil'],
        required:true
    }
})

// exporting the schema
module.exports = mongoose.model("student",studentSchema)