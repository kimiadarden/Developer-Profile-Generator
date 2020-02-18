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

  #   ${answers.Title}
   ## Description

   ${answers.Description}


  ## Installation

  ${answers.Installation}


   ## Usage

   ${answers.Usage}


  ## Contributing

  ## License
  ${answers.License}
  
  
  ##Author :
  
  Github User name :  ${answers.username}

  Email  Adress:   ${answers.Email}

  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
   <a href="https://avatars1.githubusercontent.com/u/59711758?v=4">
<img src="https://avatars1.githubusercontent.com/u/59711758?v=4" alt="avatar" height="48" width="48">
 </a>
      
    
  
  </body>
  </html>

  
  
  `;
}

promptUser()

  .then(function (answers) {
    const readme = generateReadme(answers);

    return writeFileAsync("readmee.md", readme);
  })
  .then(function () {
    console.log("Successfully wrote to readmee.md");
  })
  .catch(function (err) {
    console.log(err);
  });

