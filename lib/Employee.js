class Employee {

    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    //get name
    getName() {
        return this.name;
    }
    //return id from user input
    getID() {
        return this.id;
    }
    //return email from user input
    getEmail() {
        return this.email;
    }
    //get team member's role on team
    getRole() {
        return 'Employee';
    }
};

//to be exported
module.exports = Employee;