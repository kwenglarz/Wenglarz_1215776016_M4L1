//This is where we will implement our CRUD operations.
const Student = require('../model/student');

// Create a data store for our student data
let students = [];

// create a new student
addStudent = function (student) {
    const newStudent = new Student();
    newStudent.id = students.length + 1;
    newStudent.firstName = student.firstName;
    newStudent.middleName = student.middleName;
    newStudent.lastName = student.lastName;
    newStudent.address = student.address;
    newStudent.phone = student.phone;
    newStudent.email = student.email;
    newStudent.description = student.description;

    students.push(newStudent);

    return newStudent;
};

//update specific student
upDateStudent = function (id, student) {
    const specificStudent = students.find(student => student.id === id);

    if(specificStudent) {
        const updatedStudent = new Student();
        updatedStudent.id = student.id;
        updatedStudent.firstName = student.firstName;
        updatedStudent.middleName = student.middleName;
        updatedStudent.lastName = student.lastName;
        updatedStudent.address = student.address;
        updatedStudent.phone = student.phone;
        updatedStudent.email = student.email;
        updatedStudent.description = student.description;

        students[students.indexOf(specificStudent)] = updatedStudent;
    }
};

// get all students
const getStudents = function () {
    return students;
}

// get a specific student
getSpecificStudent = function (id) {
    const specificStudent = students.find(student => student.id === id);
    if(specificStudent){
        return specificStudent;
    }
    return undefined;
}
// delete a specific student
delSpecificStudent = function (id) {
    const specificStudent = students.find(student => student.id === id);
    if(specificStudent){
        const index = students.indexOf(specificStudent);
        students.splice(index, 1) ;
    }
}

exports.getSpecificStudent = getSpecificStudent;
exports.deleteStudent = delSpecificStudent;
exports.getStudents = getStudents;
exports.upDateStudent = upDateStudent;
exports.addStudent = addStudent;
exports.students = students;