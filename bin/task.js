const { copy, readFile, writeFile} = require('slimz');
const path = require('path');
var chalk = require('chalk');

function exec(appName){
   const From = path.resolve(__dirname,'../temp/sc-cli');
   const To   = './'+appName;
   copy(From,To).then(()=>{
    return readFile('./'+appName+'/package.json');
   })
   .then(data=>{
   	 const newData = data.toString().replace('sc-cli',appName);
   	 return writeFile('./'+appName+'/package.json',newData)
   })
   .then(data=>{
     console.log(`   Project ${chalk.green.bold(appName)} was created successfully!`);
   })
   .catch(err=>{
   	 console.log(err)
   })
}

module.exports={
	exec
}