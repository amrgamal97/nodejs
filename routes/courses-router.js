const express = require('express');
const router = express.Router();
const coursesController = require("../controllers/courses-controller");
const validationSchema = require('../middlewares/validation-schema');

router.route('/')
            .get(coursesController.getAllCourses)
            .post(validationSchema(),coursesController.addCourse)
            
router.route('/courseId')
            .get(coursesController.getSingleCourse)
            .patch(coursesController.editCourse)
            .delete(coursesController.deleteCourse)

module.exports = router;