
const fs = require("fs");
 let bpp = require("./console.js");

 //HERE ARE SOME EXAMPLES

//Variables
const constttt = 10; //constant
//or
let a = 10; //variable
//or
let c = "yo"; //variable
//or
var p = "I am global"; //var is var


//Data types
let k = true;
let b = false;
let n = null; //null
let d = undefined; //undefined
let t =  undefined; //undefined

//Console log
bpp.standard_lib.log(k);

//Condition
let gullu = 10;
if (gullu < 25) {
bpp.standard_lib.log("gullu is less than 25");
} 
else if(gullu == 100){
 bpp.standard_lib.log("gullu tu bada bhai hai");

}
else {
bpp.standard_lib.log("gullu is greater than or equal to 25");
}

//Loop

let looper = 0;
while (looper < 10) {
looper += 1;
if (looper == 5) {
bpp.standard_lib.log("andar se bol bhai ", looper);
continue;
}
if (looper == 6) {
break;
}
bpp.standard_lib.log(looper);
}
bpp.standard_lib.log("done");


//typeof
bpp.standard_lib.log(typeof 'string');

//Switch case
switch (a) {
 case "morning":
 drink = "Tea";
 break;
 case "evening":
 drink = "Shake";
 break;
 default:
 drink="Water";
 }


//Function 
function suna(){
 bpp.standard_lib.log('kaisa hai sab kuch');
}

 suna(); //function call


//Set time out
function wait(){
 bpp.standard_lib.log(' ');

 bpp.standard_lib.log('ye der se aya na, kyunki time out hai');
}
 setTimeout(wait, 5500);



//Array
bpp.standard_lib.log( [1,2,3])


//Take user input

async function age(){
 let age = await bpp.standard_lib.input.text('what is your age')
 if(age<30){
 bpp.standard_lib.log('aap to young ho bhai')
 } else {
 bpp.standard_lib.log('age is just a number bhai')
 }
}

 age();


//return
return(100);