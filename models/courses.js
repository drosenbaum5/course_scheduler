const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoursesSchema = new Schema({
    coursename: {
        type: String,
        trim: true
    },

    students: {
        type: {}
    }
});

const Course = mongoose.model("Course", CoursesSchema);

module.exports = Course;