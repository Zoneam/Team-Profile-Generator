const managerQuestions = [{
    message: "What is your team manager's name ?",
    name: "managerName",
    type: "input",
    validate: function (managerName) {
        if (/^[a-zA-Z]+$/.test(managerName)) {
            return true;
        } else {
            console.log("\033[31m  <-- Please enter a valid Name")
            return false;
        }
    },
    filter: (managerName) => {
        if (!/^[a-zA-Z]+$/.test(managerName)) {
            return managerName = ""
        } else
            return managerName
    }
}, {
    message: "What is your team manager's Id ?",
    name: "managerId",
    type: "input",
    validate: function (managerId) {
        if (/^[0-9_]+$/.test(managerId)) {
            return true;
        } else {
            console.log("\033[31m  <-- Please enter a valid ID")
            return false;
        }
    },
    filter: (managerId) => {
        if (!/^[0-9_]+$/.test(managerId)) {
            return managerId = ""
        } else
            return managerId
    }
}, {
    message: "What is your team manager's email ?",
    name: "managerEmail",
    type: "input",
    validate: function (managerEmail) {
        if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(managerEmail)) {
            return true;
        } else {
            console.log("\033[31m  <-- Please enter a valid Email")
            return false;
        }
    },
    filter: (managerEmail) => {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(managerEmail)) {
            return managerEmail = ""
        } else
            return managerEmail
    }
}, {
    message: "What is your team manager's office number ?",
    name: "managerOffice",
    type: "input",
    validate: function (managerOffice) {
        if (/^[0-9_]+$/.test(managerOffice)) {
            return true;
        } else {
            console.log("\033[31m  <-- Please enter a valid office number")
            return false;
        }
    },
    filter: (managerOffice) => {
        if (!/^[0-9_]+$/.test(managerOffice)) {
            return managerOffice = ""
        } else
            return managerOffice
    }
}]

module.exports = managerQuestions;