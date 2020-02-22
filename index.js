const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    
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
    },
    {
      type: "input",
      name: "username",
      message: "What is your Github user name?"
    }
  ])
}



function generateReadme(answers) {
  return `
  
  #   Title :${answers.Title}
  
  ## Description
  
  ${answers.Description}
  
  ----
  
  ## Installation
  
  ${answers.Installation}

  ----

  ## Usage
  
  
  > ${answers.Usage}
  
  ----
  
  ## Contributing
  ----

  ## License
  ${answers.License}
  
  ----

  ## Author 
  
  Github User name :  ${answers.username}
  
  Email  Adress:   ${answers.Email}

 ![Github Avatar](https://github.com/${answers.username}.png?=20x20)

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
  
  
  //second method of getting the user's avatar
  // function usernameGenerater (username ) {
  //   const queryUrl = `https://api.github.com/users/${username}`;
  
  //   axios.get(queryUrl).then(function(res) {
  
  //     var avatarGit= res.data.avatar_url;
  //     // console.log(avatarGit);
  //   })
  // };
  
  
  // usernameGenerater();