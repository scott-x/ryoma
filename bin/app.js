#!/usr/bin/env node
'use strict'

var chalk = require('chalk');
var inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */
      {
        type: 'input',
        name: 'type',
        message: `${chalk.magenta(' Your cli name(default:sc-cli):')}`,
        default: 'sc-cli'
      }
   
  ])
  .then(answers => {
     require('./task').exec(answers.type)

  }).catch(err=>{
    console.log(err)
  });
