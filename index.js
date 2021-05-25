const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require('./lib/employee');


// const questions = [{
//     message: "\033[32mWhat is your GitHub username? -- : ",
//         name: 'gitHubName',
//         type: 'input'
// }]

const emp = new Employee("Hayk","126","zoneam@gmail.com")

console.log (emp.email)