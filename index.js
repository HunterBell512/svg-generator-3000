const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

function init () {
  inquirer
    .prompt([
        {
            type: 'maxlength-input',
            name: 'text',
            message: 'Enter 3 letters: ',
            maxLength: 3
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like the text to be?',
        },
        {
            type: 'rawlist',
            name: 'shape',
            message: 'What shape would you like for your logo?',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like the shape to be?'
        }
    ]).then(answers => {
        GenerateSVG(answers);
    })
}

init();