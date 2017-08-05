const mongoose = require('mongoose');


const studentSchema = mongoose.Schema({
  img: String,
  firstName: String,
  lastName: String,
  major: String,
  year: Number,
  about: String,
  course: String,
  genre: String
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
