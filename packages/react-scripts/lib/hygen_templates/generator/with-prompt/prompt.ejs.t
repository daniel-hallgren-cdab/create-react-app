---
to: _templates/<%= name %>/<%= action || 'add' %>/prompt.js
---

// see types of prompts:
// https://github.com/SBoudrias/Inquirer.js#prompt-types
//
// and for examples for prompts:
// https://github.com/SBoudrias/Inquirer.js/tree/master/examples
module.exports = [
  {
    type: 'input',
    name: 'message',
    message: "What's your message?"
  }
]
