const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "userName",
    message: "Enter your GitHub username: ",
    default: "Auretus",
  },
  {
    type: "input",
    name: "title",
    message: `Enter your project's title: `,
    default: "Turboencabulator",
  },
  {
    type: "editor",
    name: "description",
    message: `Write a short description of the project (i.e. who it's for, what it does, etc.): `,
    default: "Refrangifies the demangulator shunts.",
  },
  {
    type: "editor",
    name: "install",
    message: `Provide any instructions needed to get your project installed in the typical use case. If there are any build pre-requisites or external dependencies that your installer can't account for, mention them here.`,
    default: `1) Take a step to left
2) Clap your hands
3) Spin around anticlockwise three times
4) Say "Oogely Boogely"
5) Realize that this is boilerplate, and you're supposed to replace it with the actual instructions`,
  },
  {
    type: "input",
    name: "usage",
    message: `Give a quick example of how to invoke your program in the minimal case: `,
    default: "npm run turbo",
  },
  {
    type: "list",
    name: "license",
    message: `Which software license is this being released under?`,
    choices: ["ISC", "GNU GPL-3.0", "GNU LGPL-3.0", "MIT License", "CDDL"],
  },
  {
    type: "input",
    name: "contribute",
    message: `If you want others to contribute, enter a short message about how they can do so, including a link to any guidelines you want them to follow`,
    default: `This is a solo project, no code contributions are required or desired.`,
  },
  {
    type: "editor",
    name: "tests",
    message: `Describe any test scripts you've written to validate your code, as well as how to run them.`,
    default: `Tests? Who needs tests? It Just Works, right? <\/sarcasm>`,
  },
  {
    type: "input",
    name: "questions",
    message: "How can users or potential contributors contact you if they have further questions?",
    default: `I'm a techno-hermit who delivers their git commits by carrier pigeon. Ask Google, StackExchange, or your local tech guru for advice.`,
  },
];

function init() {
  console.log("GitHub README.md generator");
  var markdown = "";
  var userData = {};

  inquirer
    .prompt(questions)
    .then((answers) => {
      api.getUser(answers.userName).then(({ data }) => {
        markdown = generateMarkdown(answers, data);
        fs.writeFileSync(path.join("README-generated.md"), markdown);
      });
    })
    .catch((err) => {
      if (err) throw err;
    });
}

init();
