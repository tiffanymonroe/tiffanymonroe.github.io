const express = require('express');
const Student = require('../models/students.js');
const router = express.Router();


//Index Route
router.get('/', (req, res) => {
  Student.find({}, (err, foundStudents)=>{
    res.render('students/index.ejs', {
      students: foundStudents
    });
  });
});

//New Route
//sessions register

//Post Route
router.post('/', (req, res)=>{
  Student.create(req.body, (err, createdStudent)=>{
    res.redirect('/students');
    console.log(err);
  });
});

// Show Route
router.get('/:id', (req, res)=>{
  Student.findById(req.params.id, (err, foundStudent)=>{
    console.log("Error is: " + err);
      res.render('students/show.ejs', {
        student: foundStudent
      });
  });
});



//Edit Route
router.get('/:id/edit', (req, res)=>{
  Student.findById(req.params.id, (err, foundStudent)=>{

    res.render('students/edit.ejs', {
      student: foundStudent
    });
  });
});

//Update Route
router.put('/:id', (req, res)=>{
  Student.findByIdAndUpdate(req.params.id, req.body, ()=>{
    res.redirect('/students');
  });
});



module.exports = router;
