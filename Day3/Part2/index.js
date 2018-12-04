const chalk = require('chalk');
const fs = require('fs');

const input = fs.readFileSync('Day3/input.txt')
                .toString()
                .split('\n')
                .map(s => s.replace(/\r$/, ''))
                .filter(s => s.length > 0);

const claims = input.map((line) => splitUp(line));

for (i=0; i<claims.length; i++) {
    let noOverlap = true;

    for (j=0; j<claims.length; j++) {
        if (i === j) {
            continue;
        }

        if (doesOverlap(claims[i], claims[j])) {
            noOverlap = false;
            break;
        }
    }

    if (noOverlap) {
        console.log(input[i]);
    }
}

function doesOverlap(firstClaim, secondClaim){
    return new Set([...firstClaim].filter(x => secondClaim.has(x))).size > 0;
}


function splitUp(line){
    const characters = line.split(' ');
    const coordinates = characters[2].replace(':', '').split(',').map(Number);
    const sizes = characters[3].split('x').map(Number);

    const used = [];

    for(x = coordinates[0]; x<coordinates[0] + sizes[0]; x++)
    {
        for(y =coordinates[1]; y<coordinates[1] + sizes[1]; y++)
        {
            used.push(`${x},${y}`);
        }
    }

    return new Set(used);
}
