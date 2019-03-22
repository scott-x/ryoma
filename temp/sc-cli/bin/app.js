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
      }
   
  ])
  .then(answers => {
     switch (answers.type){
        case 'task1':
            //task1
           console.log('task1') 
           break;
        case "task2":
            //task2
           console.log('task2') 
           break;      
     }

  }).catch(err=>{
    console.log(err)
  });
