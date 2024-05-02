// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    "Apache License 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]", "GNU General Public License v3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
  };
  return badges[license.license] || "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
## Description
${data.description}

## Table of Contents
[Installation](#installation)
[Usage](#usage)
[Contributors](#contributors)
[License](#license)
[Test](#test)
[Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributors
${data.contribution}

## License
${data.license}

## Test
${data.test}

## Contact/Questions
If you have any additional comments or questions, contact me!
Email: ${data.email}
GitHub profile: ${data.github}
`
}

module.exports = generateMarkdown;
