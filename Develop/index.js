// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

inquirer
    .prompt(
        [{
            type: "input",
            message: "What is your Github username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your project's name?",
            name: "project"
        },
        {
            type: "input",
            message: "Please write a short description of your project",
            name: "description"
        },
        {
            type: "list",
            message: "What kind of license should your project have?",
            name: "license",
            choices: ["MIT","APACE 2.0", "GPL 3.0", "BSD 3", "None"],
        }
    
    ]
    ) .then((response) => {
        console.log(response);
        const readMePageContent = pageContent(response)

        fs.writeFile("README.md", readMePageContent, err =>
        err ? console.log(err) : console.log("Succesfully created README.md"))
    })


const pageContent = (response) => 
`# ${response.project}

# Description
${response.description}
# Table of Contents

# Installation

# Usage

# License

# Contributing

# Tests

# Questions
${response.username}`