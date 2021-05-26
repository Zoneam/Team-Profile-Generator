const internQuestions = [{
    message: "What is your intern's name ?",
    name: "internName",
    type: "input",
    validate: function (internName) {
        if (/^[0-9a-zA-Z_]+$/.test(internName)) {
            return true;
        } else {
            return false;
        }
    }
}, {
    message: "What is your intern's Id ?",
    name: "internId",
    type: "input",
    validate: function (internId) {
        if (/^[0-9]+$/.test(internId)) {
            return true;
        } else {
            return false;
        }
    }
}, {
    message: "What is your intern's email ?",
    name: "internEmail",
    type: "input",
    validate: function (internEmail) {
        if (/^[0-9a-zA-Z_]+$/.test(internEmail)) {
            return true;
        } else {
            return false;
        }
    }
}, {
    message: "What is your intern's school ?",
    name: "internGithub",
    type: "input",
    validate: function (internGitHub) {
        if (/^[0-9a-zA-Z_]+$/.test(internGitHub)) {
            return true;
        } else {
            return false;
        }
    }

}]

module.exports = internQuestions;