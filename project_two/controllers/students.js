//Dependencies
const express = require('express');
const Student = require ('../models/students.js');
const router = express.Router();

//Index Route

router.get('/', (req, res)=>{
  Student.find({}, (err, foundStudents)=>{
    res.render('students/index.ejs', {
      students: foundStudents
    });
  });
});




module.exports = router;
