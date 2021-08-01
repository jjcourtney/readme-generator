const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const licenses = require("./licences.js");
const questions = require("./questions.js")


const updateReadme = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt(questions.getQuestions());
};

const createReadmeContent = (inputObject) =>{
   const { projectName, installation, usage, license, languages, contributionInstructions, tests, email, gitHubUser } = inputObject;

    return  `# ${projectName} ${licenses.getLicenseBadge(license)}
## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)
- [Languages](#languages)
- [Instructions for making contributions](#contributions)
- [Tests](#tests)

## Installation
\`\`\`${installation}\`\`\`

## Usage
${usage}

## License 
This is covered under ${license}: 
${licenses.getLicenseBadge(license)}

## Questions

If you have any questions you can contact me on: 
${email}

my github:
https://github.com/${gitHubUser}/

## Languages
${languages}

## Contributions
### Instructions on how to make contributions
${contributionInstructions}

## Tests
${tests}`;
}

const init = () => {
  promptUser()
    .then((userInput) => updateReadme ('readme.md', createReadmeContent(userInput)))
    .catch((error) => console.error(error));
};

init();