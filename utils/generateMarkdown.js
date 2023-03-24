// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n![GitHub license](#license)\n`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
    ## License
    \n This is licensed under ${license}\n`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //String literal for markup language

  return `
${renderLicenseLink(data.license)}

# ${data.title}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Tests](#tests)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#Questions)
- ${renderLicenseLink(data.license)}

## Installation

To install please run ${data.install}

## Tests

To test please run ${data.tests}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Questions

If you have any questions or concerns, you may reach me at ${data.email}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
