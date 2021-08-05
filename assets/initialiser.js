//modules
let Employee = require('./employee');

//packages
let inquirer = require('inquirer')

//constructors
class Manager extends Employee {
    constructor(name, id, email, phone){
        super('Manager', name, id, email);
        this.phone = phone;
    }
}

class Engineer extends Employee {
    constructor(name, id, email, github){
        super('Engineer', name, id, email);
        this.github = github;
    }
}

class Intern extends Employee {
    constructor(name, id, email, school){
        super('Intern', name, id, email);
        this.school = school;
    }
}

//initialiser sequence
const employees = [];
    employees[0] = manager;
    employees[1] = engineer[]

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
        name: 'name',
        message: "First off, what's the name of your manager?"
    }, {
        type: "input",
        name: 'id',
        message: "Employee ID:"
    }, {
        type: 'input',
        name: 'email',
        message: "Email address:"
    }, {
        type: 'input',
        name: 'phone',
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
    }
]).then((answers) => {
    const manager = new Manager(`${answers.name}`, `${answers.id}`, `${answers.email}`, `${answers.phone}`);
    employeeList.push(manager);
        addNew();
})}

let addNew = () => {
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
            // console.log('Engineer selected, function successful')
            engineerBuilder();
        } else if (answers.employeeSelector === 'Intern') {
            // console.log('Intern selected, function successful')
            internBuilder();
        } else if (answers.employeeSelector === 'None, I changed my mind') {
            // console.log('None option selected, function successful')
//TODO: complete this section
            inquirer
            .prompt([{
                type: 'confirm',
                name: 'changedMind',
                message: 'Are you sure? This will exit the program: ',
                default: true
            }]).then((answers) => {
                if (answers.changedMind === true) {
                    return console.log(employeeList)
                } else if (answers.changedMind === false) {
                    addNew();
                }
            })
        } else {
            console.log('Error - line 111')
        }
})
};

let engineerBuilder = () => {
    console.log(`
    ========
    Engineer
    ========
    `)
    inquirer
    .prompt([
        {
        type: 'input',
        name: 'name',
        message: "Please provide your engineers name: "
    }, {
        type: 'input',
        name: 'id',
        message: "Employee ID: ",
    }, {
        type: 'input',
        name: 'email',
        message: "Email address: "
    }, {
        type: 'input',
        name: 'github',
        message: "Github username: "
    }, {
        type: 'confirm',
        name: 'engineerConfirm',
        message: "Do you wish to add another employee?",
        default: true
    }
    ]).then((answers) => {
        const engineer = new Engineer(`${answers.name}`, `${answers.id}`, `${answers.email}`, `${answers.github}`);
        employeeList.push(engineer);
        console.log(employeeList)
    if (answers.engineerConfirm === true) {
        addNew();
    } else if (answers.engineerConfirm === false) {
        console.log(employeeList)
    } else {
        console.log('error - line 155')
    }
})
}

let internBuilder = () => {
    console.log(`
    ======
    Intern
    ======
    `)
    inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: "Please provide your interns name: "
    }, {
        type: 'input',
        name: 'id',
        message: "Employee ID: ",
    }, {
        type: 'input',
        name: 'email',
        message: "Email address: "
    }, {
        type: 'input',
        name: 'school',
        message: "Educational Institute: "
    }, {
        type: 'confirm',
        name: 'internConfirm',
        message: "Do you wish to add another employee?",
        default: true
    }
    ]).then((answers) => {
        const intern = new Intern(`${answers.name}`, `${answers.id}`, `${answers.email}`, `${answers.school}`);
        employeeList.push(intern);
    if (answers.internConfirm === true) {
        addNew();
    } else if (answers.internConfirm === false) {
    } else {
        console.log('error - line 196')
    }
})
}

module.exports = init, addNew, engineerBuilder, internBuilder;