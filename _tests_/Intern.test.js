const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

// Intern constructor test
describe("Constructor", () => {
    it("Can set a school in the constructor", () => {
        const school = "University of Adelaide";
        const internSchool = new Intern("Charlotte", 23, "chardige@email", school);

        expect(internSchool.school).toBe(school);
    })
})