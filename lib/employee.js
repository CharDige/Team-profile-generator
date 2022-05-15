const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }
}

module.exports = Employee;