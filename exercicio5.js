/*
5) Os números primos possuem várias aplicações dentro da Computação, por
exemplo na Criptografia. Um número primo é aquele que é divisível apenas
por um e por ele mesmo. Faça um programa que peça um range (ex. 1, 20) e
liste todos os números primos que existem entre esses dois números.
*/

var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');



numerosPrimos = new Array();
for (var i = parseInt(lines[0]); i <= parseInt(lines[1]); i++) {
    if (primo(i)){
        numerosPrimos.push(i);
    }
}



function primo(num) {
    for(let i = 2; i < num; i++)
    if(num % i === 0) {
        return false
    };
    return num > 1;
}


console.log(numerosPrimos);

