const makeHTML = require('./src/makeHTML');

//Profiles
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

//node modules
const fs = require('fs');
const inquirer = require('inquirer');

//team array
const team = [];

//prompt user for input:
const createManager = () => {
    return inquirer.prompt(
        [
            {
            type: 'input',
            name: 'name',
            message: 'Provide a manager for this team:',
            validate: nameInput => {
                if(nameInput){
                    return true;
                }else {
                    console.log("Please provide a manager name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please provide an ID for the manager:",
            validate: nameInput => {
                if (isNaN(nameInput)){
                    console.log("An ID is required for the manager!");
                    return false;
                }else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please provide an email for the manager:",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if(valid){
                    return true;
                }else {
                    console.log('Please provide an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please provide an office number:",
            validate: nameInput => {
                if (isNaN(nameInput)){
                    console.log("Please provide an office number:")
                    return false;
                }else {
                    return true;
                }
            }
        }
        ]
    )
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        team.push(manager);
        console.log(manager);
    })
};

const createEmployee = () => {
    console.log(` =================
    Adding employees to the team
    =================
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please select an employee role:",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'role',
            message: "What's the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;                
                }else {
                    console.log("Please provide an employee name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please provide an employee ID:",
            validate: nameInput => {
                if (isNaN(nameInput)){
                    console.log("Please enter an employee ID:");
                    return false;
                }else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }  
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {

        let { name, id, email, role, github, school, confirmEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        team.push(employee); 

        if (confirmEmployee) {
            return makeEmployee(team); 
        } else {
            return team;
        }
    })
};

// function to generate HTML file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // in case of an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your My Team profile has been successfully created! Please check the index.html file")
        }
    })
}; 

createManager()
.then(createEmployee)
.then(team => {
  return createHTML(team);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.catch(err => {
console.log(err);
});