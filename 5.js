let palavra = 'teste'
let stringReversa = ''
const quantidadeLetras = palavra.length - 1

for(let indice = quantidadeLetras; indice >= 0; indice--){
    stringReversa += palavra[indice]
}

console.log(`Palavra ${palavra} reversa = ${stringReversa}`);

