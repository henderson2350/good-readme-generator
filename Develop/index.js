// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

var licenseLink = "test"

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
            message: "Please write a short description of your project:",
            name: "description"
        },
        {
            type: "list",
            message: "What kind of license should your project have?",
            name: "license",
            choices: ["MIT","APACE 2.0", "GPL 3.0", "BSD 3", "None"],
        },
        {
            type: "input",
            message: "Give brief instructions to the user for using your project:",
            name: "usage"
        },
        {
            type: "input",
            message: "Please list any collaborators and their github usernames:",
            name: "contributors"
        },
        {
            type: "input",
            message: "Please write instructions for the user to install your project:",
            name: "installation"
        }

    
    ]
    ) .then((response) => {
            const readMePageContent = pageContent(response, licenseLink)

            fs.writeFile("README.md", readMePageContent, err =>
            err ? console.log(err) : console.log("Succesfully created README.md"))
        
    }
)

const pageContent = (response) => {
    if (response.license === "MIT") {
        var licenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        
        return `# ${response.project}
${licenseLink}

## Description
${response.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
4. [Tests](#tests)
5. [Questions](#questions)

## Installation
${response.installation}

## Usage
${response.usage}

## License
License type: ${response.license}

## Contributing
${response.contributors}

## Tests

## Questions
For more information contact me:
- [GitHub](https://github.com/${response.username})  
- My email: ${response.email}`
    }

    if (response.license === "APACE 2.0") {
        var licenseLink = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        
        return `# ${response.project}
${licenseLink}

## Description
${response.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
4. [Tests](#tests)
5. [Questions](#questions)

## Installation
${response.installation}

## Usage
${response.usage}

## License
License type: ${response.license}

## Contributing
${response.contributors}

## Tests

## Questions
For more information contact me:
- [GitHub](https://github.com/${response.username})  
- My email: ${response.email}`
    }
}


