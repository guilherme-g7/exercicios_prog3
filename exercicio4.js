/*
4) Supondo que a população de um país A seja da ordem de 80000
habitantes com uma taxa anual de crescimento de 3% e que a população de
B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um
programa que calcule e escreva o número de anos necessários para que a
população do país A ultrapasse ou iguale a população do país B, mantidas as
taxas de crescimento.
*/


var paisA = 80000;
var crescA = 0.03;

var paisB = 200000;
var crescB = 0.015;

var anos = 0;
while(true){
    paisA = paisA + (paisA * crescA);
    paisB = paisB + (paisB * crescB);

    if(paisA >= paisB){
        anos ++;
        break;
    }

    anos ++;
}

console.log('País A precisou de ' + anos + ' anos para ultrapassar o país B.');


