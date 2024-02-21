const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    available:{
        type: Number,
        required: true
    },
},{timestamps: true})

module.exports = mongoose.model('course', courseSchema)