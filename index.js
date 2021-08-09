const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (answers) =>
`
<i>${answers.license}</i>
## Description

${answers.description}
## Table of Contents
* Installation
* Usage
* Contribution
* Test
* License
* Questions

##Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Tests
${answers.tests}

## License
The application is covered under ${answers.license}

## Questions
${answers.username}
<b>You can reach me with additional questions at:</b>
${answers.email}
`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the usage instructions?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Pick a license for the project',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0'],
        },
    ])