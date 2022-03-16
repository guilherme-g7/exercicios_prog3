/*2) Escreva um algoritmo para ler o nome e a idade de uma pessoa, e exibir
quantos dias de vida ela possui. Considere sempre anos completos, e que
um ano possui 365 dias. Ex: uma pessoa com 19 anos possui 6935 dias de
vida; veja um exemplo de saída: MARIA, VOCÊ JÁ VIVEU 6935 DIAS*/


var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');


var nome = lines[0];
var idade = lines[1];


console.log(nome + ', VOCÊ JÁ VIVEU ' + idade * 365 + ' DIAS');