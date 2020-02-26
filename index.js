const axios = require('axios');
const fs = require('fs');
const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      name: 'github',
      message: 'What is your github username?',
      type: 'input',
    },{
        name: 'projectTitle',
        message: 'What is the project called?',
        type: 'input',
                
    },
    {
        name: 'projectDescription',
        message: 'What is the project about?',
        type: 'input',
                }
  ])
  .then(answers => {
    let username = answers.github;
    axios.get('https://api.github.com/users/' + username)
      .then(function (response) {
        let content = '';
        for (const key in response.data) {
          content += key + ': ' + response.data[key] + '\n\n';
        }
        fs.writeFile('readme.md', content, function (err) {
          if (err) throw err;
          console.log('Saved!');
        }); 
      })
      .catch(function (error) {
        console.log(error);
      });
  });

//   const inquirer = require('inquirer');


// const fs = require('fs');
// inquirer
//     .prompt([
//         {
//             name: 'username',
//             message: 'What is your GitHub username?',
//             type: 'input',
//         },
//     
//        
//     ])
//     .then(answers => {
//         console.log(answers);
//         let file = `
//         # Title
//         Project Title ${answers.projectTitle}
//         `
//         fs.writeFile('README.md', file, () => {})
//     });