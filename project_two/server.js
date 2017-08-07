//Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

//Middleware
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: "this is a random string secret",
    resave: false,
    saveUninitialized: false
}));

//Controllers
const studentsController = require('./controllers/students.js');
app.use('/students', studentsController);


const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

//Index Route
app.get('/', (req, res)=>{
  res.render('index.ejs')
});


//Connections
mongoose.connect('mongodb://localhost:27017/blog');


mongoose.connection.once('open', ()=>{
  console.log('mongo is in the house');
})


app.listen(3000, ()=>{
  console.log("project two, woo hoo!");
})
