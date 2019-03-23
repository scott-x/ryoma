const { copy, readFile, writeFile, rename } = require('slimz');
const path = require('path');
var chalk = require('chalk');

function exec(appName){
   const From = path.resolve(__dirname,'../temp/sc');
   const To   = './'+appName;
   copy(From,To).then(()=>{
    return readFile('./'+appName+'/package.json');
   })
   .then(data=>{
   	 const newData = data.toString().replace('sc',appName);
   	 return writeFile('./'+appName+'/package.json',newData)
   })
   .then(data=>{
     return rename('./'+appName+'/gitignore','./'+appName+'/.gitignore');
   })
   .then(()=>{
     console.log(`   Project ${chalk.green.bold(appName)} was created successfully!`);
   })
   .catch(err=>{
   	 console.log(err)
   })
}

module.exports={
	exec
}