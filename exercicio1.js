/* 1) Crie um programa que calcula que le um arquivo
com 3 valores separados por ‘,’ (a,b,c) que
representam elementos de uma função de terceiro
grau. Apresente as raízes. */


var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');



valA = Math.sqrt(lines[0]);
valB = Math.sqrt(lines[1]);
valC = Math.sqrt(lines[2]);

console.log(valA + ', ' + valB + ', ' + valC);
