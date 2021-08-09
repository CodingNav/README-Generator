const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (answers) =>
`
## Description
${answers.description}
## Table of Contents

##Installation
${answers.installation}
## Usage
${answers.usage}
## License
${answers.license}
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Questions
${answers.username}
<b>You can reach me with additional questions at:</b>
${answers.email}
`;
