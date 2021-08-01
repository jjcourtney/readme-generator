const licenses = require("./licences.js");

questions = [
    {
      type: 'input',
      name: 'projectNameInput',
      message: 'What is the name of the project?',
    },
    {
      type: 'input',
      name: 'descriptionInput',
      message: 'Give a description of the project',
    },
    {
      type: 'input',
      name: 'installationInput',
      message: 'What is the installation?',
    },
    {
      type: 'input',
      name: 'usageInput',
      message: 'What is the usage?',
    },
    {
      type: 'list',
      name: 'licenseInput',
      message: 'What is the license?',
      choices: licenses.getLicense()
    },
    {
      type: 'input',
      name: 'languagesInput',
      message: 'What languages are used?',
    },
    {
      type: 'input',
      name: 'contributionInstructionsInput',
      message: 'What are the instructions to contribute?',
    },
    {
      type: 'input',
      name: 'testsInput',
      message: 'What is the tests?',
    },
    {
      type: 'input',
      name: 'emailInput',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'gitHubUserInput',
      message: 'What is your github username?',
    }   

  ]

  const getQuestions = () => questions;

  module.exports = {
      getQuestions: getQuestions
  }