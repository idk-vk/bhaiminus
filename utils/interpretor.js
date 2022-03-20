/*jshint esversion: 6 */

const fs = require("fs");
const { fork } = require("child_process");
const mapping = require("./langmapping.json");
const errorHandler = require("./error_handler");

function bhailangInterpret (fileName) {



let BppCode = fs.readFileSync(fileName, { encoding: "utf8", flag: "r" });

// Display the file data
// console.log(BppCode);
//required string
BppCode =  `
const fs = require("fs");
  let bpp = require("bhaiminus");

  ` + BppCode;

//Cleaning string
BppCode = BppCode.replace(/ +(?= )/g, "");  //Removes multiple spaces.

// console.log(BppCode);


//Interpretor function
function interpret(bhailang, js) {
  BppCode = BppCode.split(bhailang).join(js);
}

// Interpretor
for (var key in mapping) {
  interpret(key,mapping[key]);
}
let CompiledCode = BppCode;
// console.log(BppCode);
let ProperfileName = fileName.split('.')[0]+'.js';


fs.writeFile(ProperfileName, BppCode, function (err) {
  if (err) throw err;
  // console.log('File is created successfully.');
  // require("child_process").fork('newfile.js'); //change the path depending on where the file is.


  const child = fork(ProperfileName);

  // console.log("main process is still running...");

  child.on("close", function (message) {
    // console.log("child process exited with message " + message);

if (message!= 0) {

 errorHandler.SuggestErrorCorrection(ProperfileName,fileName);


} else {
return;
}

  });
});


}




module.exports = {
bhailangInterpret,
};