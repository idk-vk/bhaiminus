/*jshint esversion: 6 */
const fs = require('fs');
const input = require('input');

 function log (argument) {
 if (typeof (argument)== "string") {
 console.log((argument).split('null').join('nulla'));
  
 } else {
   console.log(argument);
 }
}

module.exports = {
    fs,
    input,
    log
};