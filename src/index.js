const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


const updateReadme = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of the project?',
    },

  ]);
};

const createReadmeContent = (inputObject) =>
  `# ${inputObject.projectName}`;


const init = () => {
  promptUser()
    .then((userInput) => updateReadme ('readme.md', createReadmeContent(userInput)))
    .catch((error) => console.error(error));
};

init();