const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');

router
    .route('/')
    .get(studentsController.getAllStudents)
    .post(studentsController.addStudent)

router
    .route('/:id')
    .get(studentsController.getStudentByID)
    .put(studentsController.updateStudentByID)
    .delete(studentsController.deleteStudentByID)

module.exports = router;
