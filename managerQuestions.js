const managerQuestions = [{
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
}, {
    message: "What is your team manager's Id ?",
    name: "managerId",
    type: "input",
    validate: function (managerId) {
        if (/^[0-9]+$/.test(managerId)) {
            return true;
        } else {
            return false;
        }
    }
}, {
    message: "What is your team manager's email ?",
    name: "managerEmail",
    type: "input",
    validate: function (managerEmail) {
        if (/^[0-9a-zA-Z_]+$/.test(managerEmail)) {
            return true;
        } else {
            return false;
        }
    }
}, {
    message: "What is your team manager's office number ?",
    name: "managerOffice",
    type: "input",
    validate: function (managerOffice) {
        if (/^[0-9a-zA-Z_]+$/.test(managerOffice)) {
            return true;
        } else {
            return false;
        }
    }
}]

module.exports = managerQuestions;