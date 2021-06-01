const inquirer = require("inquirer");
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const managerQuestions = require('./managerQuestions')
const engineerQuestions = require('./engineerQuestions')
const internQuestions = require('./internQuestions')
let teamMembers = [];
let htmlInject;
let myHtml;
const addStaff = [{
    message: "What type of team member you want to add ?",
    name: "teamMember",
    type: "list",
    choices: ["Intern", "Engineer", "Done Adding"]
}]

async function addMember() {
    try {
        await inquirer.prompt(addStaff)
            .then((answers) => {
                switch (answers.teamMember) {
                    case "Intern":
                        inquirer.prompt(internQuestions)
                            .then((answers) => {
                                answers.role = "Intern";
                                teamMembers.push(answers)
                                addMember();
                            })
                        return
                    case "Engineer":
                        inquirer.prompt(engineerQuestions)
                            .then((answers) => {
                                answers.role = "Engineer";
                                teamMembers.push(answers)
                                addMember();
                            })
                        return
                    case "Done Adding":
                        buildHtml();
                }
            })
    } catch (err) {
        console.log(err)
    }
}

function buildHtml() {
    console.clear();
    teamMembers.forEach((member) => {
        if (member.role === "Manager") {
            const addedManager = new Manager(member.managerName, member.managerId, member.managerEmail, member.managerOffice)
            htmlInject = `<div class="card text-white bg-primary mb-3 mycards" style="max-width: 18rem;">
        <div class="card-header manager">${addedManager.getName()} : (Manager) <img class="icon" src="./icons/manager.png"></div>
        <ul class="list-group">
            <li class = "list-group-item list-group-item-info"> Id: ${addedManager.getId()}</li>
            <li class = "list-group-item list-group-item-info">Email:  <a href = "mailto:${addedManager.getEmail()}">${addedManager.getEmail()} </a></li>
            <li class = "list-group-item list-group-item-info"> Office# ${member.managerOffice} </li>
        </ul>
    </div>`
        }
        if (member.role === "Engineer") {
            const addedEngineer = new Engineer(member.engineerName, member.engineerId, member.engineerEmail, member.engineerGithub)
            htmlInject += `<div class="card text-white bg-primary mb-3 mycards" style="max-width: 18rem;">
        <div class="card-header engineer"> ${addedEngineer.getName()} : (Engineer)<img class="icon" src="./icons/engineer.png"></div>
        <ul class="list-group">
            <li class = "list-group-item list-group-item-info"> Id: ${addedEngineer.getId()} </li>
            <li class = "list-group-item list-group-item-info">Email: <a href="mailto:${addedEngineer.getEmail()}"> ${addedEngineer.getEmail()} </a></li>
            <li class = "list-group-item list-group-item-info">GitHub: <a href="https://github.com/${addedEngineer.getGitHub()}" target=”_blank”>${addedEngineer.getGitHub()}</a></li>
        </ul>
    </div>`
        }
        if (member.role === "Intern") {
            const addedIntern = new Intern(member.internName, member.internId, member.internEmail, member.internSchool)
            htmlInject += `<div class="card text-white bg-primary mb-3 mycards" style="max-width: 18rem;">
        <div class="card-header intern">${addedIntern.getName()} : (Intern)<img class="icon" src="./icons/intern.png"></div>
        <ul class="list-group">
            <li class = "list-group-item list-group-item-info"> Id: ${addedIntern.getId()} </li>
            <li class = "list-group-item list-group-item-info"> <a href="mailto:${addedIntern.getEmail()}">${addedIntern.getEmail()} </a></li>
            <li class = "list-group-item list-group-item-info"> School: ${addedIntern.getSchool()} </li>
        </ul>
    </div>`
        }
    })
myHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">My Team</h1>
        </div>
    </div>
<div class="my-team-cards">
${htmlInject}
</div>
</body>
</html>`
    writeHtml();
}

function writeHtml() {
        fs.writeFile('index.html', myHtml, (err) => {
            err ? console.log(err) : console.log(`\x1b[42m\x1b[34m Success!` + `\x1b[0m your file has been generated, look for "index.html" in root folder`)
        })
}

async function init() {
    
    try {
        console.clear();
        await inquirer.prompt(managerQuestions)
            .then((answers) => {
                answers.role = "Manager";
                teamMembers.push(answers)
            })
        await addMember();
    } catch (err) {
        console.log(err)
    }
}

init();