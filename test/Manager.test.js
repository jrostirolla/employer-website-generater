const Employee = require('../assets/employee');
const Init = require('../assets/initialiser');

class Manager extends Employee {
    constructor(name, id, email, phone){
        super('Manager', name, id, email);
        this.phone = phone;
    }
}

describe('Manager builder', () => {
    it('Fills out the variables with users input', () => {
        const employeeList = [];

        title = "Terry";
        id = "Standard ID";
        email = "test@email.com";
        phone = "test";
        
        const managerNew = new Manager(`${title}`, `${id}`, `${email}`, `${phone}`);
        employeeList.push({...managerNew});

        expect(employeeList[0]).toEqual({"email": "test@email.com", "id": "Standard ID", "name": "Terry", "phone": "test", "role": "Manager"});
    })
})

describe('Intern HTML Template', () => {
    it('Fills in the appropriate sections of the template', () => {
        let managerName = "Terry";
        let managerId = "432235";
        let managerEmail = "test@email.com";
        let managerPhone = "0000000000";

        let template = `
        <div class="manager-card ">
        <div class="card-title">
            <h2>${managerName}</h2>
            <h3>Manager </h3>
        </div>
        <div>
            <ul class="card-list">
                <li>ID: <span>${managerId}</span></li>
                <li>Email: <span>${managerEmail}</span></li>
                <li>Phone: <span>${managerPhone}</span></li>
            </ul>
        </div>
        </div>
        `

        expect(template).toContain(`
        <div class="manager-card ">
        <div class="card-title">
            <h2>Terry</h2>
            <h3>Manager </h3>
        </div>
        <div>
            <ul class="card-list">
                <li>ID: <span>432235</span></li>
                <li>Email: <span>test@email.com</span></li>
                <li>Phone: <span>0000000000</span></li>
            </ul>
        </div>
        </div>
        `)
    })
})