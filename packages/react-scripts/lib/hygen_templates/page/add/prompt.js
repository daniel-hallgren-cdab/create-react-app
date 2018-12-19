'use strict';

module.exports = {
  prompt: ({ inquirer, args }) => {
    return inquirer
      .prompt([
        {
          // Text input
          type: 'input',
          // The argument's name
          name: 'name',
          // The message to prompt
          message: "What's the name of the page?",
          // Required input
          validate: function(input) {
            return new Promise(function(resolve, reject) {
              if (!input) {
                reject('You must provide a value!');
              }

              resolve(true);
            });
          },
        },
        {
          // Yes/no question
          type: 'confirm',
          // The argument's name
          name: 'class',
          // The message to prompt
          message: 'Do you want to use a class component?',
          // Use functional component by default
          default: false,
        },
      ])
      .then(answers => {
        return Object.assign({}, answers, {
          srcPath: args.srcPath || process.cwd(),
        });
      });
  },
};
