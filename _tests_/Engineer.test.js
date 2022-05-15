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