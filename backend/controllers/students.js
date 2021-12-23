const studentModel = require("../models/student")

// get all the students
const getStudents = async (req,res) => {
    studentModel.find({})
    .then(students => res.json({students}))
    .catch(err => console.log(err))
}

// create a student
const createStudent = async (req,res) => {
    const { rollnow, name, branch } = req.body;
    const newStudent = new studentModel({
        rollnow,name,branch
    })
    newStudent.save()
    .then(student => res.json({student}))
    .catch(err => console.log(err))
}

module.exports = { getStudents, createStudent }