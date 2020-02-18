const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your Github user name?"
    },
    {
      type: "input",
      name: "Title",
      message: "What is the title of your project ?"
    },
    {
      type: "input",
      name: "Description",
      message: "What is the Description of your project ?"
    },
    {
      type: "input",
      name: "Installation",
      message: "What is the Installation protocal for this project?"
    },
    {
      type: "checkbox",
      message: "Did you use any of the below Licenses?",
      name: "License",
      choices: [
        "MIT",
        "IBM",
        "ISC",
        "GNU"
      ]
    },

    {
      type: "input",
      name: "Usage",
      message: "What is the Usage of this project?"
    },
    {
      type: "input",
      name: "Email",
      message: "What is your Email address?"
    }
  ]);
}


function generateReadme(answers) {
  return `
   ## Description



  ## Installation



   ## Usage



  ## Contributing

  ## License
  `;
}

promptUser()

