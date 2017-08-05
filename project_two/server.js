//Dependancies

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const Student = require('./controllers/students.js');

//Middleware
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static ('public') );


//controllers
const studentsController = require('./controllers/students.js');
app.use('/students', studentsController);

//Index Route
app.get('/', (req, res)=>{
  res.render('index.ejs')
});


//Connections

mongoose.connect('mongodb://localhost:27017/blog');

mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

app.listen(3000, ()=> {
  console.log("project two, woo hoo!");
})
