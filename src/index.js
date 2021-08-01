const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const licenses = require("./licences.js");
const questions = require("./questions.js")


const updateReadme = util.promisify(fs.writeFile);

/*
Description
## Table of Contents (Optional)
## Installation
## Usage
## Credits
## License
## Badges
## Features
## How to Contribute
## Tests
*/



const promptUser = () => {
  return inquirer.prompt(questions.getQuestions());
};

const createReadmeContent = (inputObject) =>{
   const { projectName, installation, usage, credits, license, badges, features, contributionInstructions, tests } = inputObject;

    return  `# ${projectName}
## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${installation}

## Usage
${usage}

## Credits
${credits} 

## License 
${licenses.getLicenseBadge(license)}

## Languages / Badges
${badges}

## Features
${features}

## Instructions for cmaking contributions
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