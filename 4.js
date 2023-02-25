/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/

const representacao = (valorEstado, valorTotal) => {
    return (valorEstado / valorTotal) * 100
}

//faturamento estados

const sp = 67.836
const rj = 36.678
const mg = 29.229
const es = 27.165
const outros = 19.849

const valorTotalMensal = sp + rj + mg + es + outros

const representacaoSp = representacao(sp, valorTotalMensal).toFixed(2)
const representacaoRj = representacao(rj, valorTotalMensal).toFixed(2)
const representacaoMg = representacao(mg, valorTotalMensal).toFixed(2)
const representacaoEs = representacao(es, valorTotalMensal).toFixed(2)
const representacaoOutros = representacao(outros, valorTotalMensal).toFixed(2)

console.log(`Valor total: R$ ${valorTotalMensal.toFixed(3)}`);
console.log(`Representação SP: % ${representacaoSp}`);
console.log(`Representação RJ: % ${representacaoRj}`);
console.log(`Representação MG: % ${representacaoMg}`);
console.log(`Representação ES: % ${representacaoEs}`);
console.log(`Representação Outros: % ${representacaoOutros}`);


