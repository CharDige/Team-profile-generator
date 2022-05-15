const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

// Engineer constructor test
describe("Constructor", () => {
    it("Can set a GitHub username in the constructor", () => {
        const github = "CharDige";
        const engineerGitHub = new Engineer("Charlotte", 23, "chardige@email.com", github);

        expect(engineerGitHub.github).toBe(github);
    })
})

// Engineer function tests
describe("Functions", () => {
    it("Can get a GitHub username via the getGitHub() function", () => {
        const github = "CharDige";
        const engineerGitHub = new Engineer("Charlotte", 23, "chardige@email.com", github);

        expect(engineerGitHub.github).toBe(github);
    })

    it("Can return 'Engineer' via the getRole() function", () => {
        const role = "Engineer";
        const newEngineer = new Engineer("Charlotte", 23, "chardige@email.com", "CharDige");

        expect(newEngineer.getRole()).toBe(role);
    })
})