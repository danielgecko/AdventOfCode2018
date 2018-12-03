const chalk = require('chalk');
const fs = require('fs');

const input = fs.readFileSync('Day2/input.txt')
                .toString()
                .split('\n')
                .map(s => s.replace(/\r$/, ''))
                .filter(s => s.length > 0);

for(i=0; i<input.length; i++)
{
    let currentId = input[i];

    for(j=i+1; j<input.length; j++)
    {
        let compareId = input[j];

        if(currentId != compareId)
        {
            let number = numberOfMismatch(currentId, compareId);
            if (number === 1)
            {
                let answer = '';
                
                for(l=0; l<currentId.length; l++)
                {
                    if(currentId[l] === compareId[l])
                    {
                        answer = answer.concat(currentId[l]);
                    }
                }
                console.log(chalk.green('answer is ' + answer));
            }
        }
    }
}

function numberOfMismatch(current, compare){
    let mismatchedCount = 0;
    for(k=0; k<current.length; k++)
    {
        if (current[k] != compare[k])
        {
            mismatchedCount++;
        }
    }

    return mismatchedCount;
}
