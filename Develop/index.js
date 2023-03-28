// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const generateMarkdown = ['./utils/generateMarkdown.js'];

// array of questions for user 
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your repo?",
        validate: titleInput => {
            if (titleInput) {
                return true;
                } else {
                console.log("Please enter a title!");
                return false;
                }
            }
            },
        {
            type: "input",
            name: "description",
            message: "What is the description of your repo?",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                    } else {
                    console.log("Please enter a description!");
                    return false;
                    }
                }
                },
            {
                type: "input",
                name: "installation",
                message: "What are the steps required to install your project?",
                validate: installationInput => {
                    if (installationInput) {
                        return true;
                        } else {
                        console.log("Please enter installation instructions!");
                        return false;
                    }
                }
                },
                {
                    type: "input",
                    name: "usage",
                    message: "Provide instructions and examples for use.",
                    validate: usageInput => {
                        if (usageInput) {
                            return true;
                            } else {
                            console.log("Please enter usage information!");
                            return false;
                            }
                        }
                        },
                        {
                            type: "list",
                            name: "license",
                            message: "What kind of license should your project have?",
                            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "No License"]
                        },
                        {
                            type: "input",
                            name: "contributing",
                            message: "What are the guidelines for contributing to your project?",
                            validate: contributingInput => {
                                if (contributingInput) {
                                    return true;
                                    } else {
                                    console.log("Please enter contribution guidelines!");
                                    return false;
                                    }
                                }
                                },
                                {
                                type: "input",
                                name: "tests",
                                message: "Provide examples on how to run tests.",
                                validate: testsInput => {
                                    if (testsInput) {
                                        return true;
                                        } else {
                                        console.log("Please enter test instructions!");
                                        return false;
                                        }
                                        }
                                    },
                                    {
                                        type: "input",
                                        name: "username",
                                        message: "What is your GitHub username?",
                                        validate: usernameInput => {
                                            if (usernameInput) {
                                                return true;
                                                } else {
                                                console.log("Please enter your GitHub username!");
                                                return false;
                                                }
                                            }
                                            },
                                            {
                                                type: "input",
                                                name: "email",
                                                message: "What is your email address?",
                                                validate: emailInput => {
                                                    if (emailInput) {
                                                        return true;
                                                        } else {
                                                        console.log("Please enter your email address!");
                                                        return false;
                                                        }
                                                    }
                                                }, 
                                            ]
                                               

                                    
                

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("Success!");
    });
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
      const markdown = generateMarkdown(data);
      writeToFile('README.md', markdown);
    });
  }

// Function call to initialize app
init();
