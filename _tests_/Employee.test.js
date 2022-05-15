const Employee = require("../lib/Employee");

// Constructor tests
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