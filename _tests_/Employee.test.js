const Employee = require("../lib/Employee");

// 
describe("Constructor", () => {
    it("Can create a new Employee object", () => {
        const newEmployee = new Employee();
        expect(typeof(newEmployee)).toBe("object");
    })
})