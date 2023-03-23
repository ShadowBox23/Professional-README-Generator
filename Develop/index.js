// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const generatePage = ['./utils/generateMarkdown.js'];

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
                },] //pick up here 
                

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("README.md", generateMarkdown(answers));
    });
}



// Function call to initialize app
init();
