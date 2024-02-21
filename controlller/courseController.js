const Course = require('../models/courseModels')
const mongoose = require('mongoose')

//get all courses
const getCourses = async (req,res) => {
    const courses = await Course.find({}).sort({createdAt: -1})
    res.status(200).json(courses)
}


//get a single courses
const getSingleCourse = async (req, res) => {
    
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Not a valid ID"})
    }

    const course = await Course.findById(id)
    if(!course){
        return res.status(404).json({err: "No such course"})
    }
    res.status(200).json(course)
}


//create a new courses
const createCourse = async (req, res) => {
    const { title, author, available } = req.body


    try {
        const course = await Course.create({title, author, available})
        res.status(200).json(course)
    } catch (err){
        res.status(400).json({err: err.message}),
        console.log(err);
    }
}

//delete a courses
const deleteCourse = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Not a valid ID"})
    }
    
    const course = await Course.findOneAndDelete({_id: id})
    if(!course){
        return res.status(404).json({err: "No such course"})
    }
    res.status(200).json(course)
}



//update a courses
const updateCourse = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Not a valid ID"})
    }

    const course = await Course.findByIdAndUpdate({_id: id},{
        ...req.body
    })

    if(!course){
        return res.status(404).json({err: "No such course"})
    }
    res.status(200).json(course)
}



module.exports = {
    getCourses, getSingleCourse, createCourse,
    deleteCourse, updateCourse
}