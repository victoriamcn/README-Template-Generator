// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function to write README file
function writeToFile(title, description, install, tests, usage, contributing, email) {
    //String literal for markup language
    `![License]()

    # ${title}
    
    ## Description

    ${description}

    ## Table of Contents
    - [Installation](#installation)
    - [Tests](#tests)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Questions](#Questions)

    ## Installation

    To install please run
    ```
    ${install}
    ```

    ## Tests

    To test please run
    ```
    ${tests}
    ```

    ## Usage

    ${usage}

    ## Contributing

    ${contributing}

    ## Questions

    If you have any questions or concerns, you may reach me at ${email}`
    
    //Array of questions for user input
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub Username',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address.',
            },
            {
                type: 'input',
                name: 'title',
                message: "What is your project's name?",
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please type a short description of your project:',
            },
            {
                type: 'checkbox',
                name: 'license',
                message: 'Which license would you like your project to have?',
                choices: ['Apache License 2.0', 'MIT License', 'Mozilla Public License 2.0'],
            },
            {
                type: 'input',
                name: 'install',
                message: 'What command should be run to install dependencies?',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What command should be run to run tests?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What does the user need to know about using the repo?',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'What does the user need to know about contributing to the repo?',
            },
        ])
        .then(response) => {
        //based on responses, generate content
        const readMeContent = writeToFile(response);
        // if error, display error. else, display that file generated
        fs.writeFile('README.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Successfully generated your README!')
        );
    }
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
