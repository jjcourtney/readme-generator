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
      type: 'list',
      name: 'license',
      message: 'What is the license?',
      choices: licenses.getLicense()
    },
    {
      type: 'input',
      name: 'languages',
      message: 'What languages are used?',
    },
    {
      type: 'input',
      name: 'contributionInstructions',
      message: 'What are the instructions to contribute?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What is the tests?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'gitHubUser',
      message: 'What is your github username?',
    }   

  ]

  const getQuestions = () => questions;

  module.exports = {
      getQuestions: getQuestions
  }