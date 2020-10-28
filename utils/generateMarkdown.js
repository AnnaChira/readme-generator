// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  ${data.table}
  
 ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Test

  ${data.test}

  ## Questions

  ${data.questions}

  ## gitHub Username

  ${data.githubusername}

  ## Email

  ${data.email}

  ## gitHub Profile

  ${data.githubprofile}

`;
}

module.exports = generateMarkdown;
