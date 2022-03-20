const logo = require('asciiart-logo');
const color = require('colors');
const longText = 'Bhai Lang++ is the spiritual successor, ' +
    'to BhaiLang. It might sound like a toy ' +
    'language but in reality is very powerful and can ' +
    'be used to write production quality software. ' +
    'It smartly interprets into javascript letting you' +
    ' to use vanilla node js wherever you feel like.';
const thankyou =    'Wish you a nice coding experience Bhai Log';
 
function print () {


console.log(
    logo({
        name: 'Bhai Lang Plus Plus',
        font: 'ANSI Shadow',
        lineChars: 10,
        padding: 2,
        margin: 3,
        borderColor: 'grey',
        logoColor: 'grey',
        textColor: 'green',
    })
    .emptyLine()
    .right('version 1.0.0')
    .emptyLine()
    .center(longText)
    .emptyLine()
    .center(thankyou)
    .render()
);


console.log('');

console.log('github> '+ 'https://github.com/bpp/bpp'.cyan);
console.log('author> '+ '@abhinavkodes'.cyan);
console.log('');
console.log('Commands:'.grey);
console.log('  bpp <filename>'.green+'       Interprets and runs the specified file');
console.log('  bpp --help'.green+'           Show help');

}


module.exports = {
print
};
