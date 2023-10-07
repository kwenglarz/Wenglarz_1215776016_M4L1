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
            validator: emailValidator,
            message: props => `${props.value} is not a valid email`
        },
        required: [true, 'User email required']
    },
    courses: [courseSchema]
})

emailValidator = function(v) {
    return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
}


const Student = mongoose.model('Student', studentSchema);

let student = new Student({
    name: 'John',
    age: 20,
    email: 'notAValidEmail',
    courses: [{ name: 'Math', grade: 105 }]
});

student.save((err, student) => {
    if (err) {
        return console.error(err);
    } else {
        console.log('Student with course information saved to database: ', student);
    }
});

module.exports = Student;