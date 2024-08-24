const { validationResult } = require('express-validator');
let courses = require('../data/courses');

const getAllCourses = (req , res) => {
    res.json(courses)
}

const getSingleCourse = (req, res) => {
    let courseId = +req.params.courseId;
    let course = courses.find(course => course.id === courseId);

    if (!course) {
        return res.json({message:'not found'})
    } 

    res.json(course)
}

const addCourse = (req , res) => {
    const newData = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array())
    }

    courses.push({ id: courses.length + 1, ...newData})
    res.status(201).json(courses)
}

const editCourse = (req , res) => {
    let courseId = +req.params.courseId;
    let course = courses.find(course => course.id === courseId);
    if (!course) {
        return res.json({message:'not found'})
    } 

    course = {...course, ...req.body};

    res.json(courses)
} 

const deleteCourse = (req , res) => {
    let courseId = +req.params.courseId;
    courses = courses.filter(course => course.id !== courseId);

    res.json(courses)
}

module.exports = {
    getSingleCourse, 
    addCourse, 
    getAllCourses, 
    editCourse, 
    deleteCourse
}