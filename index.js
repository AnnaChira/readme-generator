// array of questions for user
const inquirer = require("inquirer");
const fs  = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        default: "Example Project",
    },
    {
        type: "input",
        name: "description",
        message: "How would you describe your project?",
        default: "Example Description",
    },
    {
        type: "input",
        name: "installation",
        message: "What is the commands for the install?",
        default: "Example NPM Install",
    },
    {
        type: "input",
        name: "usage",
        message: "How do you start the application?",
        default: "Example NPM Start",
    },
    {
        type: "input",
        name: "license",
        message: "What license is applied to the application?",
        default: "CC",
    },
    {
        type: "input",
        name: "contributing",
        message: "How can people contribute to this project?",
        default: "contributing@example.com",
    },
    {
        type: "input",
        name: "test",
        message: "What is the comand to run the test?",
        default: "NPM Test",

    },
    {
        type: "input",
        name: "questions",
        message: "What is the FAQ?",
        default: "Example FAQ",
    },
    {
        type: "input",
        name: "githubusername",
        message: "What is your gitHub username?",
        default: "Example Username",
    },
    {
        type: "input",
        name: "email",
        message: "what is your email?",
        default: "myname@example.com",
    },
    {
        type: "input",
        name: "githubprofile",
        message: "What is your gitHub profile?",
        default: "github.com/examplegit"
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    return inquirer.prompt(questions)
    .then(function(answers){
        console.log(answers);
        const markdown = generateMarkdown(answers);
        fs.writeFileSync(__dirname + "/output/readme.md", markdown, "utf8");
    })
.catch(function(error){
    console.log(error);
})
}

// function call to initialize program
init();
