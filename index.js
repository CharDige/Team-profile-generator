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
                validate: function(input) {
                    if (!input) {
                        console.log("Please provide your name");
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is your ID?",
                validate: function(input) {
                    if(isNaN(input)) {
                        console.log("ID must be a number");
                    } else if (!input) {
                        console.log("Please provide your ID number")
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "Enter your email address",
                validate: function(input) {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)

                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter an email address");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is your office number?",
                validate: function(input) {
                    if(isNaN(input)) {
                        console.log("ID must be a number");
                    } else if (!input) {
                        console.log("Please provide your ID number")
                    } else {
                        return true;
                    }
                }
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
                message: "What kind of employee would you like the add?",
                choices: ["Engineer", "Intern"],
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
            },
            {
                type: "confirm",
                name: "moreEmployees",
                message: "Are there anymore employees to add?",
                default: false,
            }
        ])
    .then((employeesData) => {
        let { role, name, id, email, github, school, moreEmployees } = employeesData;

        let theEmployee;

        if (role === "Engineer") {
            theEmployee = new Engineer(name, id, email, github);

            employees.push(theEmployee);
        } else if (role === "Intern") {
            theEmployee = new Intern(name, id, email, school);

            employees.push(theEmployee);
        }

        if (!moreEmployees) {
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