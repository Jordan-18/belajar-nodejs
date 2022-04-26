const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('Joran@gmail.com'))
// console.log(validator.isMobilePhone('0897123456', 'id-ID'))

// console.log(chalk.black.bgBlue('Hello World'))

const pesan = chalk `Lorem Ipsum is {bgRed simply} dummy text of the printing and {bgBlue typesetting industry.}`

console.log(pesan)