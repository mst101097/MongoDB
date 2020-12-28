const mongoose = require("mongoose");
// import mongoose first
// than call Schema
const Schema = mongoose.Schema ;
// than create StudentSchema
const StudentSchema = new Schema({
    name : String
});

//than create database entry in db
const Student = mongoose.model('student', StudentSchema);

//export student module
module.exports = Student;
