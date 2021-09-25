//modules
let Employee = require('./employee');

//packages
let inquirer = require('inquirer');
let fs = require('fs');

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
    const employeeList = [];
    const engineerList = [];
    const internList = [];

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
    const managerNew = new Manager(`${answers.name}`, `${answers.id}`, `${answers.email}`, `${answers.phone}`);
    employeeList.push({...managerNew});
        addNew();
         employeeList;
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
            engineerBuilder();
        } else if (answers.employeeSelector === 'Intern') {
            internBuilder();
        } else if (answers.employeeSelector === 'None, I changed my mind') {
            inquirer
            .prompt([{
                type: 'confirm',
                name: 'changedMind',
                message: 'Are you sure? This will exit the program: ',
                default: true
            }]).then((answers) => {
                if (answers.changedMind === true) {
                    HTMLBuilder(employeeList, engineerList, internList);
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
        const engineerNew = new Engineer(`${answers.name}`, `${answers.id}`, `${answers.email}`, `${answers.github}`);
       engineerList.push({...engineerNew});
    if (answers.engineerConfirm === true) {
        addNew();
         return engineerList;
    } else if (answers.engineerConfirm === false) {
         HTMLBuilder(employeeList, engineerList, internList);
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
        const internNew = new Intern(`${answers.name}`, `${answers.id}`, `${answers.email}`, `${answers.school}`);
       internList.push({...internNew});
    if (answers.internConfirm === true) {
        addNew();
         internList;
    } else if (answers.internConfirm === false) {
         HTMLBuilder(employeeList, engineerList, internList);
    } else {
        console.log('error - line 196')
    }
})
}
// HTML builder
HTMLBuilder = (employeeList, engineerList, internList) => {
    //manager template
    const manager = employeeList[0];

    const managerTemplate = `
        <div class="manager-card ">
        <div class="card-title">
            <h2>${manager.name}</h2>
            <h3>Manager </h3>
        </div>
        <div>
            <ul class="card-list">
                <li>ID: <span>${manager.id}</span></li>
                <li>Email: <span>${manager.email}</span></li>
                <li>Phone: <span>${manager.phone}</span></li>
            </ul>
        </div>
        </div>
        `

//Engineer template
let modEngineer = [];

for (i = 0; i < engineerList.length; i++) {
    const engineer = engineerList[i];

    const engineerTemplate = `
        <div class="employee-card ">
        <div class="employee-title">
            <h2 id="employeeName">${engineer.name}</h2>
            <h3 id="employeeRole">${engineer.role}</h3>
        </div>
        <div>
            <ul class="card-list">
                <li>ID: <span id="employeeId">${engineer.id}</span></li>
                <li>Email: <span id="employeeEmail">${engineer.email}</span></li>
                <li>Github: <span id="employeeExtra">${engineer.github}</span></li>
            </ul>
        </div>
        </div>
        `
        modEngineer.push(engineerTemplate);
}    

// Intern template
let modInterns = [];

for (i = 0; i < internList.length; i++) {
    const intern = internList[i];

        const internTemplate = `
        <div class="employee-card ">
        <div class="employee-title">
            <h2 id="employeeName">${intern.name}</h2>
            <h3 id="employeeRole">${intern.role}</h3>
        </div>
        <div>
            <ul class="card-list">
                <li>ID: <span id="employeeId">${intern.id}</span></li>
                <li>Email: <span id="employeeEmail">${intern.email}</span></li>
                <li>School: <span id="employeeExtra">${intern.school}</span></li>
            </ul>
        </div>
        </div>
        `
        modInterns.push(internTemplate);
}

    htmlContent = (managerTemplate, modInterns, modEngineer) => {
    let mainTemplate = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Work Schedule</title>
            <meta charset="UTF-8">
        <style>
            * {
                margin: 0px;
                padding: 0px;
                font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            }
        
            h1 {
                font-size: 50px;
                text-align: center;
                padding: 40px;
                background-color: rgb(160, 52, 88);
                color: white;
            }
        
            body {
                background-image: url("./css/background_image_MOD.jpg");
            }
        
            .manager-card {
                text-align: center;
                background-color: whitesmoke;
                width: 300px;
                height: 330px;
                border: black 2px solid;
                margin: 50px;
                position: relative;
                left: 40%;
            }
        
            .card-list {
                list-style-type: none;
                padding-top: 20px;        
        
            }
        
            .card-list li {
                margin: 15px 0px 5px 11px;
                background-color: antiquewhite;
                width: 270px;
                text-align: left;
                font-size: 15px;
                border-style: double; 
                padding: 3px;
                font-weight: bolder;
            }
        
            .card-title {
                padding: 10px 0px 10px 0px;
                border: solid 1px grey;
                background-color: rgba(46, 170, 62, 0.959);
                color: whitesmoke;
                height: 100px;
                width: 299px;
            }
        
            h2 {
                font-size: 35px;
            }
            
            h4 {
                text-align: center;
                background-color: rgba(228, 228, 40, 0.301);
                font-size: 40px;
                padding: 10px;
                width: 350px;
                margin-left: 40%;
            }
        
            .employee-card {
                text-align: center;
                background-color: whitesmoke;
                width: 300px;
                height: 330px;
                border: black 2px solid;
                margin: 50px;
                position: relative;
                left: 5%;
                display: inline-block;
            }
        
            .employee-title {
                padding: 10px 0px 10px 0px;
                border: solid 1px grey;
                background-color: rgba(43, 128, 177, 0.959);
                color: whitesmoke;
                height: 100px;
                width: 299px;
            }
        
        </style>
        </head>
        
        <body>
            <header>
                <h1>My Team</h1>
            </header>
        
            <main>
        <!-- Manager Window -->
        ${managerTemplate}
        
        <h4>Employees</h4>
        <!-- Engineer cards -->
        ${modEngineer.join(" ")}
        
        <!-- Intern cards -->
        ${modInterns.join(" ")}
        
            </main>
        
            <footer>
                <p></p>
            </footer>
        </body>
        </html>
        `

    console.log("code reached line 409") 
    fs.writeFile('roster.html', mainTemplate, (err) => 
        err ? console.log(err) : console.log("Your new roster has now been written")
    )
        }  
    htmlContent(managerTemplate, modInterns, modEngineer);
}  




module.exports = init, addNew, engineerBuilder, internBuilder, employeeList, engineerList, internList;