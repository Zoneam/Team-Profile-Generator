const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const myHtml = require('./src/temp');
const questions = [{
    message: "What is your team manager's name ?",
    name: "managerName",
    type: "input",
    validate: function (managerName) {
        if (/^[0-9a-zA-Z_]+$/.test(managerName)) {
            return true;
        } else {
            return false;
        }
    }
}]

async function writeHtml(myHtml) {
    fs.writeFile('index.html', myHtml, (err) => {
        err ? console.log(err) : console.log('Success!')
    })
}

function generateHtml(answers) {

}

async function init() {
    try {
        console.clear();
        await inquirer.prompt(questions)
            .then((answers) => {
                // fs.writeHtml(generateHtml(answers))
                console.log(answers)
            })
    } catch (err) {
        console.log(err)
    }
}



init();

// const emp = new Employee("Hayk", "111", "1zoneam@gmail.com")
// const eng = new Engineer("Hayk", "222", "2zoneam@gmail.com", "github.com")
// const int = new Intern("Hayk", "333", "3zoneam@gmail.com", "Raffu 36")
// const man = new Manager("Hayk", "444", "4zoneam@gmail.com", "258")
// console.log(emp.getEmail())
// console.log(emp.getRole())
// console.log(eng.getEmail())
// console.log(eng.getRole())
// console.log(int.getEmail())
// console.log(int.getRole())
// console.log(man.getEmail())
// console.log(man.getRole())