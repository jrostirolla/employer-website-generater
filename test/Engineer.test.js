const Employee = require('../assets/employee');
const Init = require('../assets/initialiser');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super('Engineer', name, id, email);
        this.github = github;
    }
}

describe('Engineer builder', () => {
    it('Fills out the variables with users input', () => {
        const employeeList = [];

        title = "Terry";
        id = "Standard ID";
        email = "test@email.com";
        github = "trusty"
        
        const engineer = new Engineer(`${title}`, `${id}`, `${email}`, `${github}`);
        employeeList.push({...engineer});

        expect(employeeList[0]).toContain({"email": "test@email.com", "id": "Standard ID", "name": "Terry", "github": "trusty", "role": "Engineer"});
    })
})

describe('Engineer HTML Template', () => {
    it('Fills in the appropriate sections of the template', () => {
        let engineerName = "Terry";
        let engineerRole = "Engineer";
        let engineerId = "432235";
        let engineerEmail = "test@email.com";
        let engineerGithub = "trusty"

        let template = `
        <div class="employee-card ">
        <div class="employee-title">
            <h2 id="employeeName">${engineerName}</h2>
            <h3 id="employeeRole">${engineerRole}</h3>
        </div>
        <div>
            <ul class="card-list">
                <li>ID: <span id="employeeId">${engineerId}</span></li>
                <li>Email: <span id="employeeEmail">${engineerEmail}</span></li>
                <li>Github: <span id="employeeExtra">${engineerGithub}</span></li>
            </ul>
        </div>
        </div>
        `
        expect(template).toContain(`
        <div class="employee-card ">
        <div class="employee-title">
            <h2 id="employeeName">Terry</h2>
            <h3 id="employeeRole">Engineer</h3>
        </div>
        <div>
            <ul class="card-list">
                <li>ID: <span id="employeeId">432235</span></li>
                <li>Email: <span id="employeeEmail">test@email.com</span></li>
                <li>Github: <span id="employeeExtra">trusty</span></li>
            </ul>
        </div>
        </div>
        `)
    })
})