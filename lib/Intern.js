//import Employee constructor:
const Employee = require('./lib/Employee');

//extend the Employee constructor:
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    //return school from user input:
    getSchool() {
        return this.school;
    }
    //override team member's role:
    getRole() {
        return "Intern";
    }
}
//exported:
module.exports = Intern;