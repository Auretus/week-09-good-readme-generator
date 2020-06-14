function generateMarkdown(answers, userData) {
  const licenseBadgified = answers.license.replace(/-/g, "--");

  return (
    `# ${answers.title}
![badge](https://img.shields.io/badge/license-${licenseBadgified}-blue?style=for-the-badge)

## Author: 
${answers.userName}

<img src="${userData.avatar_url}" alt="Profile Pic" title="Profile Pic" width="150" />

Email: <a href="mailto:${userData.email}">${userData.email}</a>

## Description:
${answers.description}

## Table of Contents:
* [Installation](#installation)
* [Usage](#isage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation:
${answers.install}

## Usage:

` +
    "\`" + answers.usage + "\`" +
    `
## License:
Released under the ${answers.license} license. 

## Contributing:
${answers.contribute}

## Tests:
${answers.tests}

## Questions:
${answers.questions}
`
  );
}

module.exports = generateMarkdown;
