/*jshint esversion: 6 */
var fs = require('fs');

var colors = require('colors');


var check = require('syntax-error');
// console.log(__dirname);
 var stringSimilarity = require("string-similarity");
let suggestions = fs.readFileSync(__dirname+'\\error_check_list.json', { encoding: "utf8", flag: "r" });
suggestions = (JSON.parse(suggestions));

const keyList = [
  'pakka bhai ye hai',
  'bhai ye hai',
  'bol bhai',
  'sun bhai',
  'bhai ek kaam kar',
  'agar bhai',
  'ya fir bhai',
  'warna bhai',
  'jab tak bhai',
  'agla dekh bhai',
  'bas kar bhai',
  'dena bhai',
  'bhai dekh',
  'agar',
  'nhi to',
  'ye kar bhai',
  'bhai thoda ruk',
  'array bhai',
  'bata bhai',
  'bhai puch',
  'nikal bhai'

];



function SuggestErrorCorrection (jsfile,bhaifile) {
    // body... 


let file = './'+jsfile;
let bhaiLang = './'+bhaifile;



// console.log(bhaiLang);
// console.log(file);

let src = fs.readFileSync(file,
            {encoding:'utf8', flag:'r'}); 
var err = check(src, file);
if (err) {
    // console.error('ERROR DETECTED' + Array(62).join('!'));
    // console.error(err.annotated);
    errorloc(err.line,err.column,bhaiLang);
    // console.log(err.line,err);

    // console.error(Array(76).join('-'));
}

}


function errorloc (line,column,src) {
    // console.log(src);
let bhailangSrc = fs.readFileSync(src,
            {encoding:'utf8', flag:'r'}); 

    let code= bhailangSrc.split("\n")
    // console.log(code);
let bhaiLang_line = line - 5;
    suggest(code[bhaiLang_line],bhaiLang_line, src);


// console.log(code[line-4]);
// →

}

function suggest (line,line_no,file_name) {
    let cleanline = line.replace(/\s*\(.*?\)\s*/g, ''); //Remove ()
    cleanline = cleanline.replace(/ *\[[^\]]*]/g, ''); //Rmove[]
    cleanline = cleanline.replace(/\s?\{[^}]+\}/g, ''); //remove {}

let suggestion = stringSimilarity.findBestMatch(cleanline, keyList);
let rel = [suggestion.bestMatch.target,suggestion.bestMatchIndex];

// console.log(line+'hi');

// console.log(rel);
// console.log();
if (suggestion.bestMatch.rating>0.15) {
SuggestionGenerator(suggestion.bestMatchIndex,line_no,file_name);
} else {
No_suggestion();
}


}




function SuggestionGenerator (number,line_no,file_name) {
let HelpMessage = suggestions[number];

try {
    

console.log(' ');

    console.error(Array(76).join('-').yellow.underline);
console.log(' ');
console.log('Bhai kya kar raha hai tu?'.underline.red);
console.log(' ');
console.log('Syntax suggestion:'.blue);
console.log(colors.grey('In '+file_name+' at line '+(line_no+1)+' '));
console.log('Did you mean?'.grey);
console.log(' ');

console.log('> '+ HelpMessage.Name.green);
console.log(' ');
console.log();

console.log('Definition:'.yellow.underline+' ' +HelpMessage.Defination.cyan);
console.log(' ');
console.log('Example:'.yellow.underline);
console.log(' ');

console.log('> '+HelpMessage.Example.cyan);
console.log(' ');
console.log('Js Interpretation:'.yellow.underline);
console.log(' ');

console.log('> '+ HelpMessage.Interpretaton.cyan);


} catch(e) {
    // statements
    console.log('No suggestion');
}


}


function No_suggestion(){
console.error(Array(76).join('-').yellow.underline);
console.log(' ');
console.log('Are Bhai Bhai Bhai.....'.underline.red);
console.log('No B++ Syntax suggestion found'.grey);


}


module.exports = {
SuggestErrorCorrection,
};