const Intern = require("../lib/Intern");

// Intern constructor test
describe("Constructor", () => {
    it("Can set a school in the constructor", () => {
        const school = "University of Adelaide";
        const internSchool = new Intern("Charlotte", 23, "chardige@email.com", school);

        expect(internSchool.school).toBe(school);
    })
})

// Intern function tests
describe("Functions", () => {
    it("Can get a school via the getSchool() function", () => {
        const school = "University of Adelaide";
        const internSchool = new Intern("Charlotte", 23, "chardige@email.com", school);

        expect(internSchool.getSchool()).toBe(school);
    })

    it("Can return 'Intern' via the getRole() function", () => {
        const role = "Intern";
        const newIntern = new Intern("Charlotte", 23, "chardige@email.com", "University of Adelaide");

        expect(newIntern.getRole()).toBe(role);
    })
})