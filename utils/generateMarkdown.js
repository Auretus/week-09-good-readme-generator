function generateMarkdown(data) {
  const licenseBadgified = data.license.replace(/-/g,'--');
  return `# ${data.title}
![badge](https://img.shields.io/badge/license-${licenseBadgified}-blue?style=for-the-badge)
![badge](https://img.shields.io/github/languages/code-size/${data.userName}/${data.title}?style=for-the-badge)
![badge](https://img.shields.io/github/languages/top/${data.userName}/${data.title}?style=for-the-badge)
![badge](https://img.shields.io/github/last-commit/${data.userName}/${data.title}?style=for-the-badge)
## Author: ${data.userName}

## Description:
${data.description}

## Installation instructions:
${data.install}

## Usage:
${data.usage}

## License:
Released under the ${data.license} license. 

## Contributing:
${data.contribute}

## Tests:
${data.tests}

## Further questions:
${data.questions}`;
}

module.exports = generateMarkdown;
