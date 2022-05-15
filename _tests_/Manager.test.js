const Manager = require("../lib/Manager");

// Manager constructor test
describe("Constructor", () => {
    it("Can set an office number in the constructor", () => {
        const officeNumber = 123;
        const managerOfficeNumber = new Manager("Charlotte", 23, "chardige@email.com", officeNumber);

        expect(managerOfficeNumber.officeNumber).toBe(officeNumber);
    })
})

// Manager function tests
describe("Functions", () => {
    it("Can get an office number via the getOfficerNumber() function", () => {
        const officeNumber = 123;
        const managerOfficeNumber = new Manager("Charlotte", 23, "chardige@email.com", officeNumber);

        expect(managerOfficeNumber.getOfficeNumber()).toBe(officeNumber);
    })

    it("Can return 'Manager' via the getRole() function", () => {
        const role = "Manager";
        const newManager = new Manager("Charlotte", 23, "chardige@email.com", 123);

        expect(newManager.getRole()).toBe(role);
    })
})