const internQuestions = [{
    message: "What is your intern's name ?",
    name: "internName",
    type: "input",
    validate: function (internName) {
        if (/^[a-zA-Z]+$/.test(internName)) {
            return true;
        } else {
            console.log("\033[31m  <-- Please enter a valid Name")
            return false;
        }
    },
    filter: (internName) => {
        if (!/^[a-zA-Z]+$/.test(internName)) {
            return internName = ""
        } else
            return internName
    }
}, {
    message: "What is your intern's Id ?",
    name: "internId",
    type: "input",
    validate: function (internId) {
        if (/^[0-9_]+$/.test(internId)) {
            return true;
        } else {
            console.log("\033[31m  <-- Please enter a valid ID")
            return false;
        }
    },
    filter: (internId) => {
        if (!/^[0-9_]+$/.test(internId)) {
            return internId = ""
        } else
            return internId
    }
}, {
    message: "What is your intern's email ?",
    name: "internEmail",
    type: "input",
    validate: function (internEmail) {
        if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(internEmail)) {
            return true;
        } else {
            console.log("\033[31m  <-- Please enter a valid Email")
            return false;
        }
    },
    filter: (internEmail) => {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(internEmail)) {
            return internEmail = ""
        } else
            return internEmail
    }
}, {
    message: "What is your intern's school ?",
    name: "internSchool",
    type: "input",
    validate: function (internSchool) {
        if (/^[0-9a-zA-Z_]+$/.test(internSchool)) {
            return true;
        } else {
            console.log("\033[31m  <-- Please enter a valid school name")
            return false;
        }
    },
    filter: (internSchool) => {
        if (!/^[0-9a-zA-Z_]+$/.test(internSchool)) {
            return internSchool = ""
        } else
            return internSchool
    }

}]

module.exports = internQuestions;