let Employee = require('./assets/employee');

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

const employeeList = [
    {
      role: 'Manager',
      name: 'Tom',
      id: '3',
      email: '@',
      phone: '0000000000'
    }
  ]
  
engineerList = [
  {
    role: 'Engineer',
    name: 'Tim',
    id: '3',
    email: '@',
    github: 'wegwgw'
  },
  {
    role: 'Engineer',
    name: 'dan',
    id: '3',
    email: '@',
    github: 'srghwgwf'
  },
]

internList = [
  {
    role: 'Intern',
    name: 'fred',
    id: '6',
    email: '@',
    school: 'ebegw3fwf'
  }
]
// const employeeList = [
    
//         [ 'Manager', 'Ted', '4', '@', '0000000000' ],
//         [ 'Engineer', 'Res', '3', '@', 'sgws' ],
//         [ 'Engineer', 'bob', '3', '@', 'sgws' ],
//         [ 'Engineer', 'tim', '3', '@', 'sgws' ],
//         [ 'Engineer', 'zac', '3', '@', 'sgws' ],
//         [ 'Engineer', 'dan', '3', '@', 'sgws' ],
//         [ 'Intern', 'Fred', '3', '@', 'tafe' ],
//         [ 'Intern', 'jeff', '3', '@', 'tafe' ],
//         [ 'Intern', 'george', '3', '@', 'tafe' ],
//       ]
      
  
// const engineerArray = employeeList.filter((el) => {
//         return el.role === "Engineer";
//     });
    
// const internArray = employeeList.filter((el) => {
//         return el.role === "Intern";
//     });

console.log(engineerArray);
// console.log(internArray);
console.log(`\n ====intern array==== \n`)

test = (engineerList) =>  {
        for (i = 0; i < 2; i++) {
            const engineer = engineerList[i];
            const engineerName = engineer[1];
            const engineerRole = engineer[0];
            const engineerId = engineer[2];
            const engineerEmail = engineer[3];
            const engineerGithub = engineer[4];
            console.log(intern)
        }
    }

    test()