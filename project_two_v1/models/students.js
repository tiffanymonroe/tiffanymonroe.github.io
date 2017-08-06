const mongoose = require('mongoose');
Schema = mongoose.Schema;


const studentSchema = new Schema({
  img: String,
  firstName: String,
  lastName: String,
  major: String,
  year: String,
  about: String,
  course: String,
  genre: String
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
