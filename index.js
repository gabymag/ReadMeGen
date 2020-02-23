const inquirer = require('inquirer');
const fs = require('fs');
inquirer
    .prompt([
        {
            name: 'username',
            message: 'What is your GitHub username?',
            type: 'input',
        },
        {
            name: 'projectTitle',
            message: 'What is the project called?',
            type: 'input',
        }
        {
            name: 'projectDescription',
            message: 'What is the project about?',
            type: 'input',
        }
    ])
    .then(answers => {
        console.log(answers);
        let file = `
        # Title
        Project Title ${answers.projectTitle}
        `
        fs.writeFile('README.md', file, () => {})
    });