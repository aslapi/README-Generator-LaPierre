// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const userQuestions = [
  "What is the title of your application?",
  "What is the description of your application?",
  "Would you like to create a Table of Contents?",
  "What are the steps required to install your project? Provide detailed step-by-step instructions for the user to complete before using the application.",
  "Provide instructions for the user on how to use your application and provide screenshots if necessary.",
  "Who contributed, if anyone, to this project?",
  "What license was used for this project?",
  "Does this application need additional testing?",
  "Enter the link to your github profile",
  "What is your email address?",
];

const questions = [
  {
    type: "input",
    name: "title",
    message: `${userQuestions[0]}`,
  },
  {
    type: "input",
    name: "description",
    message: `${userQuestions[1]}`,
  },
  {
    type: "input",
    name: "installation",
    message: `${userQuestions[3]}`,
  },
  {
    type: "input",
    name: "usage",
    message: `${userQuestions[4]}`,
  },
  {
    type: "input",
    name: "contribution",
    message: `${userQuestions[5]}`,
  },
  {
    type: "list",
    name: "license",
    message: `${userQuestions[6]}`,
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-Clause License",
      "BSD 3-Clause License",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
      "None",
    ],
  },
  {
    type: "input",
    name: "test",
    message: `${userQuestions[7]}`,
  },
  {
    type: "input",
    name: "github",
    message: `${userQuestions[8]}`,
  },
  {
    type: "input",
    name: "email",
    message: `${userQuestions[9]}`,
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    fs.writeFile("README.md", generateMarkdown(data), function (err) {
      console.log(err ? err : "README written successfully!");
    });
  });
}

// Function call to initialize app
init();
