#! /usr/bin/env node

/*jshint esversion: 6 */
const fs = require("fs");
// const mapping = require("../langmapping.json");
const standard_lib = require("../utils/functions.js");
const interpret = require("../utils/interpretor");
const hello_message = require("../utils/hello");



let fileName = process.argv[2];

//Basic hello
if (process.argv[2]=='-v') {
hello_message.print();
}else {
  if (fileName) {
  // console.log(fileName);
interpret.bhailangInterpret(fileName);
} else {


}
}

// Interpretor




//Standard libraries

module.exports = {
standard_lib
};
