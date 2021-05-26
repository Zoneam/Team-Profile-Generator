const inquirer = require("inquirer");
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const myHtml = require('./src/temp');
const managerQuestions = require('./managerQuestions')
const engineerQuestions = require('./engineerQuestions')
const internQuestions = require('./internQuestions')
let teamMembers = [];
let htmlInject;
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
                                console.log(answers)
                                answers.role = "Intern";
                                teamMembers.push(answers)
                                console.log(teamMembers)
                                addMember();
                            })
                        return
                    case "Engineer":
                        inquirer.prompt(engineerQuestions)
                            .then((answers) => {
                                answers.role = "Engineer";
                                teamMembers.push(answers)
                                console.log(teamMembers)
                                addMember();
                            })
                        return
                    case "Done Adding":
                        buildHtml();
                        return
                }
            })
    } catch (err) {
        console.log(err)
    }
}

function buildHtml() {
    teamMembers.forEach((member) => {
        if (member.role === "Manager") {
            const addedManager = new Manager(member.managerName, member.managerId, member.managerEmail, member.managerOffice)
            htmlInject = `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Manager</div>
        <ul class="list-group">
             < li class = "list-group-item list-group-item-info" > Name: ${addedManager.getName()} < /li>
            < li class = "list-group-item list-group-item-info" > < a href = "mailto:${addedManager.getEmail()}" > ${addedManager.getEmail()} < /a></li >
            < li class = "list-group-item list-group-item-info" > Id: ${addedManager.getId()}< /li>
            < li class = "list-group-item list-group-item-info" > Office# ${member.managerOffice} < /li>
        </ul>
    </div>`
        }
        if (member.role === "Engineer") {
            const addedEngineer = new Engineer(member.engineerName, member.engineerId, member.engineerEmail, member.engineerGitHub)
            htmlInject += `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Manager</div>
        <ul class="list-group">
             < li class = "list-group-item list-group-item-info" > Name: ${addedEngineer.getName()} < /li>
             < li class = "list-group-item list-group-item-info" > Id: ${addedEngineer.getId()} < /li>
            < li class = "list-group-item list-group-item-info" > < a href = "mailto:${addedEngineer.getEmail()}" > ${addedEngineer.getEmail()} < /a></li >
            < li class = "list-group-item list-group-item-info" > GitHub ${addedEngineer.getGitHub()} < /li>
        </ul>
    </div>`
        }
        if (member.role === "Intern") {
            const addedIntern = new Intern(member.internName, member.internId, member.internEmail, member.internGitHub)
            htmlInject += `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Manager</div>
        <ul class="list-group">
             < li class = "list-group-item list-group-item-info" > Name: ${addedIntern.getName()} < /li>
             < li class = "list-group-item list-group-item-info" > Id: ${addedIntern.getId()} < /li>
            < li class = "list-group-item list-group-item-info" > < a href = "mailto:${addedIntern.getEmail()}" > ${addedIntern.getEmail()} < /a></li >
            < li class = "list-group-item list-group-item-info" > School:  ${addedIntern.getSchool()} < /li>
        </ul>
    </div>`
        }
    })
    writeHtml();
}


function writeHtml() {
    try {
        fs.writeFile('index.html', myHtml, (err) => {
            err ? console.log(err) : console.log('Success!')
        })
    } catch (err) {
        console.log(err)
    } finally {
        console.log("myHtml", myHtml)
        document.getElementsByClassName("my-team-cards").append("<b>Appended text</b>");
    }
}

// function writeHtml() {
//     let myPromise = new Promise((resolve, reject) => {
//             fs.writeFile('index.html', myHtml, (err) => {
//                 err ? console.log(err) : console.log('Success!')
//                 console.log(resolve)
//             })
//         })
//         .then(() => {
//             console.log("------------------")
//             document.getElementsByClassName("my-team-cards").append("<b>Appended text</b>");
//         })
// }

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