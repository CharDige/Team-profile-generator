// npm modules
const inquirer = require("inquirer");
const fs = require("fs");

// Created modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Template = require("./src/template")



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
        const { name, id, email, officeNumber } = managerData;

        const theManager = new Manager(name, id, email, officeNumber);

        console.log(theManager);
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
        const { role, name, id, email, github, school } = employeesData;

        let theEmployee;

        if (role === "Engineer") {
            theEmployee = new Engineer(name, id, email, github);

            console.log(theEmployee);
        } else if (role === "Intern") {
            theEmployee = new Intern(name, id, email, school);

            console.log(theEmployee);
        } else if (role === "No more employees to add") {
            return console.log("Finished!")
        }
    })
}


createManager()
    .then(createEmployees);