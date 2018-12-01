const chalk = require('chalk');
const fs = require('fs');
let frequency = 0;

const input = fs.readFileSync('Day1/input.txt')
                .toString()
                .split('\n')
                .map(s => s.replace(/\r$/, ''))
                .filter(s => s.length > 0);

for(i=0; i<input.length; i++){
    let newNumber = parseInt(input[i]);
    console.log("frequency is " + frequency);
    console.log('new number is ' + newNumber);
    frequency += newNumber;
    console.log('New frequency is ' + frequency);
}

console.log(chalk.green(frequency));
