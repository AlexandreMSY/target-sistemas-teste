const {readFileSync} = require('fs')

/* 
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const json = readFileSync('dados.json')
const data = JSON.parse(json)
let valores = []
let diasDoMes = []
let somaValores = 0

//soma de todos os valores
data.forEach(element => {
    valores.push(element.valor)
    somaValores += element.valor
});

const mediaMensal = somaValores / valores.length

/*verificação de quais dias no mês possuem faturamento maior que a media mensal */
data.forEach(element => {
    const valor = element.valor
    const dia = element.dia

    if(valor > mediaMensal){
        diasDoMes.push(dia)
    }
})

const quantidadeDias = diasDoMes.length
const menorValor = Math.min(...valores)
const maiorValor = Math.max(...valores)

console.log(`Menor valor de faturamento no mês: ${menorValor}`);
console.log(`Maior valor de faturamento no mês: ${maiorValor}`);
console.log(`Quantidade de dias que o faturamento foi maior à média mensal: ${quantidadeDias}`);
console.log(`Dias: ${String(diasDoMes)}`);


