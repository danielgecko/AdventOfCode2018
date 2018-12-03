const chalk = require('chalk');
const fs = require('fs');

let stringsWithTwo = 0;
let stringsWithThree = 0;

const input = fs.readFileSync('Day2/input.txt')
                .toString()
                .split('\n')
                .map(s => s.replace(/\r$/, ''))
                .filter(s => s.length > 0);

for(i=0; i<input.length; i++){
    let stringToEvaluate = input[i];
    let hasTwo = 0;
    let hasThree = 0;

    for(j=0; j<stringToEvaluate.length; j++){
        let letterToEvaluate = stringToEvaluate[j];

        if(countLetters(stringToEvaluate, letterToEvaluate) === 2)
        {
            hasTwo += 1;
        }
        if(countLetters(stringToEvaluate, letterToEvaluate) === 3)
        {
            hasThree += 1;
        }
    }

    if(hasTwo > 0)
    {
        stringsWithTwo += 1;
    }
    if(hasThree > 0)
    {
        stringsWithThree += 1;
    }
}

console.log('strings with two ' + stringsWithTwo);
console.log('strings with three ' + stringsWithThree);
console.log(chalk.green('checksum is ' + stringsWithTwo*stringsWithThree));


function countLetters(stringToEvaluate, letterToEvaluate){

    let numberOfLetters = 0;

    for (k=0; k<stringToEvaluate.length; k++){
        if (stringToEvaluate.charAt(k) == letterToEvaluate){
            numberOfLetters += 1;
        }

    }

    return numberOfLetters;

}
