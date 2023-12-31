const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: String,
    grade: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: props => `${props.value} is not an integer value`
        },
        min: [0, 'Grade cannot be less than 0'],
        max: [100, 'Grade cannot be more than 100']
    }
});

const studentSchema = new Schema({
    name: String,
    age: {
        type: Number,
        min: [0, 'Age cannot be less than 0']
    },
    email: {
        type: String,
        validate: {
            validator: function(v) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: props => `${props.value} is not a valid email`
        },
        required: [true, 'User email required']
    },
    courses: [courseSchema]
});

const Student = mongoose.model('Student', studentSchema);

// ------- INVALID Student model -------
// let student = new Student({
//     name: 'John',
//     age: 20,
//     email: 'notAValidEmail',
//     courses: [{ name: 'Math', grade: 105 }]
// });

// Valid Student model
let student = new Student({
    name: 'John',
    age: 20,
    email: 'validemail@asu.edu',
    courses: [{ name: 'Math', grade: 90 }]
});

student.save().then(function (student) {
    console.log('Student with course information saved to database: ', student);
}).catch(function (err) {
    return console.error(err);
});

module.exports = Student;