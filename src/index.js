const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


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
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of the project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is the installation?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'What is the name contributors?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What is the license?',
    },
    {
      type: 'input',
      name: 'badges',
      message: 'What badges?',
    },
    {
      type: 'input',
      name: 'features',
      message: 'What are the features?',
    },
    {
      type: 'input',
      name: 'contributionInstructions',
      message: 'What is the instructions to contribute?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What is the tests?',
    },

  ]);
};

const createReadmeContent = (inputObject) =>{
   const { projectName, installation, usage, credits, license, badges, features, contributionInstructions, tests } = inputObject;

    return  `# ${projectName}
            ## ${installation}
            ## ${usage}
            ## ${credits} 
            ## ${license}
            ## ${badges}
            ## ${features}
            ## ${contributionInstructions}
            ## ${tests}`;
}

const init = () => {
  promptUser()
    .then((userInput) => updateReadme ('readme.md', createReadmeContent(userInput)))
    .catch((error) => console.error(error));
};

init();