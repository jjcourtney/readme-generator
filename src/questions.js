const licenses = require("./licences.js");

questions = [
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
      type: 'list',
      name: 'license',
      message: 'What is the license?',
      choices: licenses.getLicense()
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
    }

  ]

  const getQuestions = () => questions;

  module.exports = {
      getQuestions: getQuestions
  }