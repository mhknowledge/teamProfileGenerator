//use Employee constructor:
const Employee = require('./Employee');

//extend Employee constructor for Engineer class:
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    //return github from user input
    getGithub() {
        return this.github;
    }
    //code to override role on team
    getRole() {
        return "Engineer";
    }
};

//exported:
module.exports = Engineer;