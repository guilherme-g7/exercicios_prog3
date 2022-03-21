/* 
3) Faça um Programa que receba como entrada quanto você ganha por
hora e o número de horas trabalhadas no mês. Calcule e mostre o total do
seu salário no referido mês, sabendo-se que são descontados 11% para o
Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um
programa que nos dê:
*/

var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');


ganhoHr = lines[0];
numeroHr = lines[1];

salarioBruto = ganhoHr * numeroHr;

ir = salarioBruto * 0.11;
inss = salarioBruto * 0.08;
sind = salarioBruto * 0.05;


console.log('+ Salário bruto : ' + salarioBruto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
console.log('- IR (11%) : ' + ir.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
console.log('- INSS (8%) : ' + inss.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
console.log('- Sindicato (5%) : ' + sind.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));


salarioLiq = salarioBruto - (ir + inss + sind);
console.log('= Salário Liquido : ' + salarioLiq.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));

