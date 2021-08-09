const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (answers) =>
`
<i style="float: right;">${answers.license}</i>
# ${answers.projectName}

## Description
${answers.description}

## Table of Contents
* <a href="#installation">Installation</a>
* <a href="#usage">Usage</a>
* <a href="#contribution">Contribution</a>
* <a href="#tests">Test</a>
* <a href="#license">License</a>
* <a href="#questions">Questions</a>

## Installation
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
<b>${answers.username}</b> <br>
You can reach me with additional questions at: <br>
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
            name: 'projectName',
            message: 'What is the name of your project?',
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
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Pick a license for the project',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0'],
        },
    ])
    .then((answers) => {
        const readmeContent = generateREADME(answers);
    
        fs.writeFile('README.md', readmeContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README!')
        );
      });