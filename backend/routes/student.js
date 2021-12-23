// importing the required libraries
const router = require("express").Router()
const { createStudent, getStudents } = require("../controllers/students")

// defining the routers
router.get("/",getStudents)
router.post("/",createStudent)

// exporting the router
module.exports = router;