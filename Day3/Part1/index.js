const chalk = require('chalk');
const fs = require('fs');

const input = fs.readFileSync('Day3/input.txt')
                .toString()
                .split('\n')
                .map(s => s.replace(/\r$/, ''))
                .filter(s => s.length > 0);

const claims = input.map((line) => splitUp(line));

const area = {};

for(i=0; i<claims.length; i++)
{
    for(cell of claims[i])
    {
        if(area[cell])
        {
            area[cell] += 1;
        }
        else
        {
            area[cell] = 1;
        }
    }
}

let overlap = 0;

for(c in area)
{
    if(!c || area[c] < 2)
    {
        continue;
    }

    overlap++;
}

console.log(overlap);

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
