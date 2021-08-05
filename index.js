//modules
// const Template = require('./assets/template')
// const Employee = require('./assets/employee')

//node packages
const inquirer = require('inquirer');
const fs = require('fs');

function init() {
    console.log(
`
==============================
Welcome to the roster writer!
Answer the prompts to generate
your HTML...
==============================
`)
inquirer
    .prompt([
        {
        type: 'input',
        name: 'managerName',
        message: "First off, what's the name of your manager?"
    }, {
        type: "input",
        name: 'managerId',
        message: "Employee ID:"
    }, {
        type: 'input',
        name: 'managerEmail',
        message: "Email address:"
    }, {
        type: 'input',
        name: 'managerPhone',
        message: 'Workphone number:',
        validate(value) {
            const pass = value.match(
              /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
            );
            if (pass) {
              return true;
            }
            return 'Please enter a valid phone number';
          },
    }, {
        type: 'confirm',
        name: 'newEmployee',
        message: "Would you like to add an employee?",
        default: true
    }
]).then((answers) => {
    if (answers.newEmployee === true) {
        addNew();
    } else {
        return console.log("You chose to run a manager only team... Are you sure?");
    }
})}

let addNew = function employee() {
    inquirer
    .prompt({
        type: 'list',
        name: 'employeeSelector',
        message: 'What type of employee do you wish to add?',
        choices: [
            'Engineer',
            'Intern',
            'None, I changed my mind'
        ]
    }).then((answers) => {
        if (answers.employeeSelector === 'Engineer') {
            console.log('Engineer selected, function successful')
        } else if (answers.employeeSelector === 'Intern') {
            console.log('Intern selected, function successful')
        } else if (answers.employeeSelector === 'None, I changed my mind') {
            console.log('None option selected, function successful')
        } else {
            console.log('Error... not sure what happened there...')
        }
})
};

init();