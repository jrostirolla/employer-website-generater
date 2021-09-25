const Employee = require('../assets/employee');
const Init = require('../assets/initialiser');

class Intern extends Employee {
    constructor(name, id, email, school){
        super('Intern', name, id, email);
        this.school = school;
    }
}

describe('Intern builder', () => {
    it('Fills out the variables with users input', () => {
        const employeeList = [];

        title = "Terry";
        id = "Standard ID";
        email = "test@email.com";
        school = "UNSW"
        
        const intern = new Intern(`${title}`, `${id}`, `${email}`, `${school}`);
        employeeList.push({...intern});

        expect(employeeList[0]).toContain({"email": "test@email.com", "id": "Standard ID", "name": "Terry", "school": "UNSW", "role": "Engineer"});
    })
})

describe('Intern HTML Template', () => {
    it('Fills in the appropriate sections of the template', () => {
        let internName = "Terry";
        let internRole = "Intern";
        let internId = "432235";
        let internEmail = "test@email.com";
        let internSchool = "UNSW"

        let template = `
        <div class="employee-card ">
        <div class="employee-title">
            <h2 id="employeeName">${internName}</h2>
            <h3 id="employeeRole">${internRole}</h3>
        </div>
        <div>
            <ul class="card-list">
                <li>ID: <span id="employeeId">${internId}</span></li>
                <li>Email: <span id="employeeEmail">${internEmail}</span></li>
                <li>School: <span id="employeeExtra">${internSchool}</span></li>
            </ul>
        </div>
        </div>
        `

        expect(template).toContain(`
        <div class="employee-card ">
        <div class="employee-title">
            <h2 id="employeeName">Terry</h2>
            <h3 id="employeeRole">Intern</h3>
        </div>
        <div>
            <ul class="card-list">
                <li>ID: <span id="employeeId">432235</span></li>
                <li>Email: <span id="employeeEmail">test@email.com</span></li>
                <li>School: <span id="employeeExtra">UNSW</span></li>
            </ul>
        </div>
        </div>
        `)
    })
})