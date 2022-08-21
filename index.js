const getHTML = require("./src/template");

const Manager = require ("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

const teamArray = [];

function callManager(){
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "please enter a name"
    },
    {
        type: "input",
        name: "id",
        message: "please enter an ID"
    },
    {
        type: "input",
        name: "email",
        message: "please enter email address"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "please enter the office Number"
    },

    ])
    .then((answers)=> {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber,
        );
        console.log(manager)
        teamArray.push(manager);
        getTeam();
    });
};
function getTeam(){
    inquirer
    .prompt([
    {
        type: 'list',
        name: "roles",
        message: "please choose the role",
        choices: ["Engineer", "Intern","Build Team"],
    },
    ])
    .then((answers) => {

     switch(answers.roles) {
        case "Engineer":
             engineerQuestions()
           break;
        case "Intern":
            internQuestions()
            break;
        default:
        writeFile()
     }
        });
        };



function engineerQuestions() {
    inquirer
    .prompt([
    {
        type: "input",
        name: "name",
        message: "enter engineers name"
    },
    {
        type: "input",
        name: "id",
        message: "enter engineers ID",
    },
    {
        type: "input",
        name: "email",
        message: "please enter email address",
    },
    {
        type: "input",
        name: "gitUsername",
        message: "Github username",
    },
    ])
    .then ((answer)=> {
        const engineer = new Engineer(
            answer.name,
            answer.id,
            answer.email,
            answer.gitUsername,
        );
        console.log(engineer)
        teamArray.push(engineer);
        getTeam();    
    });
}

function internQuestions() {
    inquirer
    .prompt([
    {
        type: "input",
        name: "name",
        message: "enter Interns name",
    },
    {
        type: "input",
        name: "id",
        message: "enter Interns ID",
    },
    {
        type: "input",
        name: "email",
        message: "enter email address",
    },
    {
        type: "input",
        name: "school",
        message: "enter school",
    },
    ])
    .then ((answer)=> {
        const intern = new Intern(
            answer.name,
            answer.id,
            answer.email,
            answer.school,
        );
        console.log(intern)
        teamArray.push(intern);
        getTeam();    
    });
}
const writeFile = () => {
    fs.writeFileSync("./dist/index.html", getHTML(teamArray), (err) => {
     if (err) {
         console.log(err);
         return;
     }   else {
         console.log ("Team Profile complete")
     }
    });
};
callManager()
    