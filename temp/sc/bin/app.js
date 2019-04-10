#!/usr/bin/env node
'use strict'

var chalk = require('chalk');
var inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */
      {
        type: 'rawlist',
        name: 'type',
        message: `${chalk.magenta(' Choose your task: ')}`,
        choices: ['task1','task2'],
        default: 'task1'
      },
      // {
      //   type: 'input',
      //   name: 'type',
      //   message: `${chalk.magenta(' Input Something You Like: ')}`,
      //   default: 'sth'
      // }
   
  ])
  .then(answers => {
     switch (answers.type){
        case 'task1':
            //task1
           require('./task').run('xxx')
           break;
        case "task2":
           //task2
           require('./task').run('xxx') 
           break;      
     }

  })