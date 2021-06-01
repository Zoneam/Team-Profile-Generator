const engineerQuestions = [{
    message: "What is your engineer's name ?",
    name: "engineerName",
    type: "input",
    validate: function (engineerName) {
        if (/^[a-zA-Z]+$/.test(engineerName)) {
            return true;
        } else {
            console.log("\033[31m  <-- Please enter a valid Name")
            return false;
        }
        },   
        filter: (engineerName) => {
            if (!/^[a-zA-Z]+$/.test(engineerName)) {
                return engineerName = ""
            } else
                return engineerName
        }
    }
    
, {
    message: "What is your engineer's Id ?",
    name: "engineerId",
    type: "input",
    validate: function (engineerId) {
        if (/^[0-9]+$/.test(engineerId)) {
            return true;
        } else {
            console.log("\033[31m  <-- Please enter a valid ID")
            return false;
        }
    },
    filter: (engineerId) => {
        if (!/^[0-9]+$/.test(engineerId)) {
            return engineerId = ""
        } else
            return engineerId
    }
}, {
    message: "What is your engineer's email ?",
    name: "engineerEmail",
    type: "input",
    validate: function (engineerEmail) {
        if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(engineerEmail)) {
            return true;
        } else {
            console.log("\033[31m  <-- Please enter a valid email")
            return false;
        }
    },
    filter: (engineerEmail) => {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(engineerEmail)) {
            return engineerEmail = ""
        } else
            return engineerEmail
    }
}, {
    message: "What is your engineer's GitHub username ?",
    name: "engineerGithub",
    type: "input",
    validate: function (engineerGitHub) {
        if (/^[0-9a-zA-Z_]+$/.test(engineerGitHub)) {
            return true;
        } else {
            console.log("\033[31m  <-- Please enter a valid GitHub Username")
            return false;
        }
    },
    filter: (engineerGitHub) => {
        if (!/^[0-9a-zA-Z_]+$/.test(engineerGitHub)) {
            return engineerGitHub = ""
        } else
            return engineerGitHub
    }

}]

module.exports = engineerQuestions;