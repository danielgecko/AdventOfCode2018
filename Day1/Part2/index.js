const chalk = require('chalk');
const fs = require('fs');

let frequency = 0;
let newArray = [frequency];
let answer;
let isDuplicate = false;
let position = 0;

const input = fs.readFileSync('Day1/input.txt')
                .toString()
                .split('\n')
                .map(s => s.replace(/\r$/, ''))
                .filter(s => s.length > 0);

while (!isDuplicate) {
    if (position === input.length){
        position = 0;
    }
    let newNumber = parseInt(input[position]);
    frequency += newNumber
    isDuplicate = newArray.includes(frequency);
    newArray.push(frequency);
    position++;
}

answer = frequency;

console.log(chalk.green(answer));
