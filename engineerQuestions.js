const engineerQuestions = [{
    message: "What is your engineer's name ?",
    name: "engineerName",
    type: "input",
    validate: function (engineerName) {
        if (/^[0-9a-zA-Z_]+$/.test(engineerName)) {
            return true;
        } else {
            return false;
        }
    }
}, {
    message: "What is your engineer's Id ?",
    name: "engineerId",
    type: "input",
    validate: function (engineerId) {
        if (/^[0-9]+$/.test(engineerId)) {
            return true;
        } else {
            return false;
        }
    }
}, {
    message: "What is your engineer's email ?",
    name: "engineerEmail",
    type: "input",
    validate: function (engineerEmail) {
        if (/^[0-9a-zA-Z_]+$/.test(engineerEmail)) {
            return true;
        } else {
            return false;
        }
    }
}, {
    message: "What is your engineer's GitHub username ?",
    name: "engineerGithub",
    type: "input",
    validate: function (engineerGitHub) {
        if (/^[0-9a-zA-Z_]+$/.test(engineerGitHub)) {
            return true;
        } else {
            return false;
        }
    }

}]

module.exports = engineerQuestions;