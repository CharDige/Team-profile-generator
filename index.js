const inquirer = require("inquirer");
//const fs = require("fs");
//const Employee = require("./lib/Employee");
//const Manager = require("./lib/Manager");
//const Engineer = require("./lib/Engineer");
//const Intern = require("./lib/Intern");

// Begin prompts with asking for manager details
const createManager = () => {
    return inquirer
        .prompt([
            {
                type:"input",
                name: "name",
                message: "What is your name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is your ID?",
            },
            {
                type: "input",
                name: "email",
                message: "Enter your email address",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is your office number?",
            }
        ])
    .then((managerData) => {
        const managerAnswers = {
            name: managerData.name,
            id: managerData.id,
            email: managerData.email,
            officeNumber: managerData.officeNumber,
        }

        console.log(managerAnswers);
    })
}

// After manager created, begin Employee prompts
const createEmployees = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "Would you like to add an employee?",
                choices: ["Engineer", "Intern", "No more employees to add"],
            },
            {
                type: "input",
                name: "name",
                message: "What is this employee's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is this employee's ID?",
            },
            {
                type: "input",
                name: "email",
                message: "Enter employee's email address",
            },
            {
                type: "input",
                name: "github",
                message: "Enter this Engineer's GitHub username",
                when: (answers) => answers.role === "Engineer",
            },
            {
                type: "input",
                name: "school",
                message: "What school did this intern go to?",
                when: (answers) => answers.role === "Intern",
            }
        ])
    .then((employeesData) => {
        const employeesAnswers = {
            role: employeesData.role,
            name: employeesData.name,
            id: employeesData.id,
            email: employeesData.email,
            github: employeesData.github,
            school: employeesData.school,
        }

        console.log(employeesData);
    })
}

// createManager();

createEmployees();