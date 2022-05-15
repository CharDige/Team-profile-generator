const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

// Constructor test
describe("Constructor", () => {
    it("Can set an office number in the constructor", () => {
        const officeNumber = 123;
        const managerOfficeNumber = new Manager("Charlotte", 23, "chardige@email.com", officeNumber);

        expect(managerOfficeNumber.officeNumber).toBe(officeNumber);
    })
})