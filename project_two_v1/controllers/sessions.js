const express = require('express');
const router = express.Router();
const User = require('../models/user.js')
const bcrypt = require('bcryptjs');


router.get('/login', (req, res)=>{
  res.render('students/login.ejs', {message: req.session.message || ""})
});

router.get('/register', (req, res)=>{
  res.render('students/register.ejs', {})
});

router.post('/login', (req, res)=>{
  User.findOne({email: req.body.email}, (err, user)=>{
    if(student){
      if(bcrypt.compareSync(req.body.password, student.password)){
        req.session.message = "";
        req.session.email = req.body.email;
        req.session.logged = true;
        console.log(req.session, req.body);

        res.redirect('/')
      } else console.log("else in bcrypt compare");
        req.session.message = "Oops, email or password are incorrect!"
        res.redirect('sessions/login')
    } else {
      req.session.message = "Oops, email or password are incorrect!"
      res.redirect('sessions/login')
    }
  });
});



module.exports = router;
