var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');



valA = Math.sqrt(lines[0]);
valB = Math.sqrt(lines[1]);
valC = Math.sqrt(lines[2]);

console.log(valA + ', ' + valB + ', ' + valC);
