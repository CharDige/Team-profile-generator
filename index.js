// npm modules
const inquirer = require("inquirer");
const fs = require("fs");

// Created modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const createTeam = require("./src/template");

// Empty employees array to populate
const employees = [];


// Begin prompts with asking for manager details
const beginPrompts = () => {
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
        const { name, id, email, officeNumber } = managerData;

        const theManager = new Manager(name, id, email, officeNumber);

        employees.push(theManager);

        createEmployees();
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
        let { role, name, id, email, github, school } = employeesData;

        let theEmployee;

        if (role === "Engineer") {
            theEmployee = new Engineer(name, id, email, github);

            employees.push(theEmployee);
        } else if (role === "Intern") {
            theEmployee = new Intern(name, id, email, school);

            employees.push(theEmployee);
        }

        if (role === "No more employees to add") {
            return writeHTML(employees);

        } else {
            return createEmployees(employees);
        }
    })
}

// Write the index.html file
const writeHTML = (employees) => {
    fs.writeFile("./dist/index.html", createTeam(employees), (err) =>
    err ? console.log(err) : console.log("Team profiles page created!"))
}

// Initiate prompts and create HTML from inputs
beginPrompts()