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

createManager();