/*
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

console.log('Sequência de Fibonacci');

let sequenciaFibonacci = []
const valor = 144
let ultimo = 0
let penultimo = 1
let termo = 0

while (valor > termo){
    termo = ultimo + penultimo
    ultimo = penultimo
    penultimo = termo

    sequenciaFibonacci.push(termo)
}

const naSequencia = sequenciaFibonacci.includes(valor)

if(valor === 0 || naSequencia){
    console.log(`O numero ${valor} faz parte da sequência de Fibonacci`);
    console.log(`Sequência: ${String(sequenciaFibonacci)}`);
}else{
    console.log(`O numero ${valor} não faz parte da sequência de Fibonacci`);
    console.log(`Sequência: ${String(sequenciaFibonacci)}`);
}
