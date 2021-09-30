// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    "Title Of The Project?",
    "What is the Project Description?",
    "What are the Installation Instructions?",
    "What is the Usage Information?",
    "What are the Contribution Guidelines?",
    "What are the Test Instructions?",
    "Choose a License Option",
    "What is your Github Username?",
    "What is your Email Address?",
    ];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'installInstructions',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: questions[5],
        },
        {
            type: 'checkbox',
            name: 'licenseOptions',
            message: questions[6],
            choices: [
                "[MIT License](MITLICENSE.txt)",
                "[ISC License](ISCLICENSE.txt)",
            ]
        },
        {
            type: 'input',
            name: 'githubUser',
            message: questions[7],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8],
        }  
    ]);
};





// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
