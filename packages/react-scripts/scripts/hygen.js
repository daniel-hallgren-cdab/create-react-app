/**
 * Copyright (c) 2018–present, Congenial Data AB.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const execSync = require('child_process').execSync;

// react-scripts path
const ownPath = path.join(path.resolve(__dirname, '..'));

// Hygen templates path
const templatesPath = path.join(
  path.resolve(__dirname, '..', 'lib/hygen_templates')
);

const argv = process.argv.slice(2);

const hygenGenerator = argv[1];
const hygenAction = argv[2];

/**
 * Returns the directories inside the given `sourcePath`
 * @param {string} sourcePath A file path
 */
function dirsAtPath(sourcePath) {
  try {
    if (!fs.pathExistsSync(sourcePath)) {
      throw `The directory ${sourcePath} does not seem to exist`;
    }

    return fs
      .readdirSync(sourcePath)
      .filter(name => fs.statSync(path.join(sourcePath, name)).isDirectory);
  } catch (e) {
    console.error(chalk.red(e));
  }
}

/**
 * Runs `hygen` with the given generator and action in the owner directory
 * @param {string} generator A Hygen generator name
 * @param {string} action A Hygen generator action name
 * @param {string} templatesPath A Hygen templates folder path
 */
function runHygenGenerator(generator, action, templatesPath) {
  try {
    execSync(
      `HYGEN_TMPLS='${templatesPath}' npm --prefix ${ownPath} run hygen -- ${generator} ${action} --srcPath ${process.cwd()}`,
      { stdio: 'inherit', cwd: process.cwd() }
    );
  } catch (e) {
    console.log(chalk.red(e));
  }
}

function hygen() {
  try {
    if (!fs.pathExistsSync(templatesPath)) {
      throw `Hygen templates path does not exist (${templatesPath})`;
    }

    const availableGenerators = dirsAtPath(templatesPath);

    if (!availableGenerators.includes(hygenGenerator)) {
      throw `There is no '${hygenGenerator}' generator. These generators are available: [ ${availableGenerators.join(
        ', '
      )} ]`;
    }

    const availableActions = dirsAtPath(
      path.join(path.resolve(templatesPath, hygenGenerator))
    );

    if (!availableActions.includes(hygenAction)) {
      throw `There is no '${hygenAction}' action on the '${hygenGenerator}' generator. These actions are available: [ ${availableActions.join(
        ', '
      )} ]`;
    }

    runHygenGenerator(hygenGenerator, hygenAction, templatesPath);
  } catch (e) {
    console.error(chalk.red(e));

    return false;
  }
}

hygen();
