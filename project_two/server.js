//dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//middleware
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));


//index route
app.get('/', (req, res)=>{
  res.render('index.ejs')
});


//mongoose
mongoose.connect('mongodb://localhost:27017/blog');


mongoose.connection.once('open', ()=>{
  console.log('mongo is in the house');
})

//listener

app.listen(3000, ()=>{
  console.log("project two, woo hoo!");
})
