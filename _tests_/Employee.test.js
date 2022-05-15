const Employee = require("../lib/Employee");

// Employee constructor tests
describe("Constructor", () => {
    it("Can create a new Employee object", () => {
        const newEmployee = new Employee();
        expect(typeof(newEmployee)).toBe("object");
    })

    it("Can set a name in the constructor", () => {
        const name = "Charlotte";
        const employeeName = new Employee(name);

        expect(employeeName.name).toBe(name);
    })

    it("Can set an id in the constructor", () => {
        const id = 23;
        const employeeId = new Employee("Charlotte", id);

        expect(employeeId.id).toBe(id);
    })

    it("Can set an email in the constructor", () => {
        const email = "chardige@email.com";
        const employeeEmail = new Employee("Charlotte", 23, email);

        expect(employeeEmail.email).toBe(email);
    })
})

// Employee function tests
describe("Functions", () => {
    it("Can get a name via the getName() function", () => {
        const name = "Charlotte";
        const employeeName = new Employee(name);

        expect(employeeName.getName()).toBe(name);
    })

    it("Can get an id via the getId() function", () => {
        const id = 23;
        const employeeId = new Employee("Charlotte", id);

        expect(employeeId.getId()).toBe(id);
    })

    it("Can get an email via the getEmail() function", () => {
        const email = "chardige@email.com";
        const employeeEmail = new Employee("Charlotte", 23, email);

        expect(employeeEmail.getEmail()).toBe(email);
    })

    it("Can get the role to be 'Employee' via the getRole() function", () => {
        const role = "Employee";
        const newEmployee = new Employee("Charlotte", 23, "chardige@email.com");

        expect(newEmployee.getRole()).toBe(role);
    })
})