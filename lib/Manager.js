//import Employee constructor
const Employee = require('./lib/Employee');
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    //role override:
    getRole() {
        return "Manager";
    }
}
//export:
module.exports = Manager;