const fs = require('fs');
const inquirer = require("inquirer");
const path = require('path');
const generateMarkdown = require('./generationMarkdown.js')


const questions = [
  {
    type: "input",
    name: "tittle",
    message: "What is the tittle of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a project tittle");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What license will your project use?",
    choices: ["None", "Apache 2.0", "MIT", "GPL v3.0"],
    validate: (licenseInput = () => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please select from one of the options.");
        return false;
      }
    }),
  },
  {
    type: "input",
    name: "description",
    message: "Provide a project description",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please provide a project description");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What steps are needed to install your project?",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please provide installation steps");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "askMe",
    message:
      "What is your Github username?",
    validate: (askMeInput) => {
      if (askMeInput) {
        return true;
      } else {
        console.log(
          "Please provide your username to be reach for questions"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What is the use of your project?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please provide a use for your project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message:
      "What is your email to be reached for questions?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please provide an email for the proyect");
        return false;
      }
    },
  },
  {
    type: "input",
    name:"document",
    message: 
    "What name do you want to give to your document(Read.ME)?"

  }
];

inquirer
  .prompt(questions)
  .then(function(response){
   let answers =  generateMarkdown(response);
    console.log(answers);
     writeDocument(response.document, answers);
  })
  .catch(function(err){
      console.log(err)
  })
 
  function writeDocument(filename, answer) {
    fs.writeFileSync(path.join(`${filename}.md`), answer)
  }

