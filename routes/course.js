const express = require('express')
const { getCourses, getSingleCourse, createCourse, deleteCourse, updateCourse } = require('../controlller/courseController')

const router = express.Router()

//GET request
router.get("/", getCourses)

//GET request
router.get("/:id", getSingleCourse)

//POST request
router.post("/", createCourse)

//DELETE request
router.delete("/:id", deleteCourse)

//UPDATE request
router.patch("/:id", updateCourse)

module.exports = router