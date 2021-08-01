const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const licenses = require("./licences.js");
const questions = require("./questions.js");
const languages = require("./languages.js");



const updateReadme = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt(questions.getQuestions());
};

const createReadmeContent = (inputObject) =>{
   const { projectNameInput, installationInput, usageInput, licenseInput, languagesInput, contributionInstructionsInput, testsInput, emailInput, gitHubUserInput, descriptionInput } = inputObject;

    return  `# ${projectNameInput} ${licenses.getLicenseBadge(licenseInput)}

## Description

${descriptionInput}

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)
- [Languages](#languages)
- [Instructions for making contributions](#contributions)
- [Tests](#tests)

## Installation
\`\`\`${installationInput}\`\`\`

## Usage
${usageInput}

## License 
This is covered under ${licenseInput}: 
${licenses.getLicenseBadge(licenseInput)}

## Questions

If you have any questions you can contact me on: 
${emailInput}

my github:
https://github.com/${gitHubUserInput}/

## Languages
${languages.getLanguageBadge(languagesInput)}

## Contributions
### Instructions on how to make contributions
${contributionInstructionsInput}

## Tests
${testsInput}`;
}

const init = () => {
  promptUser()
    .then((userInput) => updateReadme ('readme.md', createReadmeContent(userInput)))
    .catch((error) => console.error(error));
};

init();