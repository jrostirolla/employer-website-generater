let Employee = require('../assets/employee');

describe('Employee constructor', () => {
    it("Takes in the requested variables", () => {
        const terry = new Employee("Manager", "Terry", "73423", "test@email.com")

        expect(terry).toContain({"email": "test@email.com", "id": "73423", "name": "Terry", "role": "Manager"});
    })
})