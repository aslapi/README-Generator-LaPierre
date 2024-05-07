// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const badges = {
    "Apache License 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]", 
    "GNU General Public License v3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]", 
    "MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]", 
    "BSD 2-Clause License": "[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)]",
    "BSD 3-Clause License": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]",
    "Creative Commons Zero v1.0 Universal": "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)]",
    "Eclipse Public License 2.0": "[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)]",
    "GNU Affero General Public License v3.0": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]",
    "GNU Lesser General Public License v2.1": "[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)]",
    "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]",
    "The Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]"
  };

  // If there is no license, return an empty string
  return badges[license] || "";
}


// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  const licenseLinks = {
    "Apache License 2.0": "https://opensource.org/licenses/Apache-2.0",
    "GNU General Public License v3.0": "https://www.gnu.org/licenses/gpl-3.0.html",
    "MIT License": "https://opensource.org/licenses/MIT",
    "BSD 2-Clause License": "https://opensource.org/licenses/BSD-2-Clause",
    "BSD 3-Clause License": "https://opensource.org/licenses/BSD-3-Clause",
    "Creative Commons Zero v1.0 Universal": "https://creativecommons.org/publicdomain/zero/1.0/",
    "Eclipse Public License 2.0": "https://opensource.org/licenses/EPL-2.0",
    "GNU Affero General Public License v3.0": "https://www.gnu.org/licenses/agpl-3.0.html",
    "GNU Lesser General Public License v2.1": "https://www.gnu.org/licenses/lgpl-2.1.html",
    "Mozilla Public License 2.0": "https://opensource.org/licenses/MPL-2.0",
    "The Unlicense": "https://unlicense.org/"
  };

// If there is no license, return an empty string
  return licenseLinks[license] || "";
}


// TODO: Create a function that returns the license section of README
function renderLicenseSection(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);

  return `${badge} ${link}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data);
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
${licenseSection}

## Contact/Questions
If you have any additional comments or questions, contact me!
Email: ${data.email}
GitHub profile: ${data.github}
`
}

module.exports = generateMarkdown;
