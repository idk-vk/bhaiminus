#! /usr/bin/env node

var fs = require("fs");
var input = require("input");

// console.log(process.argv);
let loc = process.argv[2];
let kk = fs.readFileSync(loc, { encoding: "utf8", flag: "r" });

// Display the file data
// console.log(kk);
//required string
kk =
  `var input = require('input');
function requirejs (module,variable) {
var variable = require(module);
}

 function log (argument) {
 if (typeof (argument)== "string") {
 console.log((argument).split('null').join('nulla'));
  
 } else {
   console.log(argument);
 }

 }
 ` + kk;

//Interpretor
//Cleaning string
kk = kk.replace(/ +(?= )/g, "");

function interpret(bhailang, js) {
  kk = kk.split(bhailang).join(js);
  // console.log(kk);
}
const mapping = require("../langmapping.json");

// write loop here
for (var key in mapping) {
  interpret(key,mapping[key]);
}

fs.writeFile("newfile.js", kk, function (err) {
  if (err) throw err;
  // console.log('File is created successfully.');
  require("child_process").fork("newfile.js"); //change the path depending on where the file is.

  //  const { fork } = require("child_process");

  // const child = fork("newfile.js");

  // console.log("main process is still running...");

  // child.on("close", function (message) {
  //   // console.log("child process exited with message " + message);
  // });
});
