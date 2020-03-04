const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
{
  type: 'input',
  name: 'userName',
  message: 'Enter your GitHub username: '
},
{
  type: 'input',
  name: 'projectTitle',
  message: `Enter your project's title: `
},
{
  type: 'editor',
  name: 'projectDescription',
  message: `Write a short description of the project (i.e. who it's for, what it does, etc.): `;
},
{
  type: 'editor',
  name: 'installationInstructions',
  message: "Provide any instructions needed to get your project installed in the typical use case. If there are any build pre-requisites or external dependencies that your installer can't account for, mention them here."
},
{
  type: 'input',
  name: 'usage',
  message: "Give a quick example of how to invoke your program in the minimal case: "
},
{
  type: 'input',
  name: 'license',
  message: "Which software license is this being released under?",
  default: "ISC"
},
{
  type: 'input',
  name: 'contriubting',
  message: 'If you want others to contribute, enter a short message about how they can do so, including a link to any guidelines you want them to follow',
  default: "(n/a)"
},
{
  type: 'editor',
  name: 'tests',
  message: `Describe any test scripts you've written to validate your code, as well as how to run them.`
},
{
  type: 'input',
  name: 'questions',
  message: 'How can users or potential contributors contact you if they have further questions?'
}
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
