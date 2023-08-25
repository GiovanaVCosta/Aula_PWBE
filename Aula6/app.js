/*
 * Data: 25/08/2023
 * Autor: Giovana Vieira
 * Objetivo: programa para auxiliar no processo de vendas de uma loja, 
 * o programa vai solicitar o valor de venda e apresentar condiçoes de forma de pagamento
 * Versao: 1.0
 */


const { log } = require('console');
var readline = require('readline');

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

//ENTRADA DE DADOS DA PRIMEIRA PERGUNTA
entradaDados.question('Qual o valor final sa sua compra: ' , function(preco){

    let valor1 = preco.replace(',','.');

//ENTRADA DE DADOS DO SEGUNDO DE DADOS
console.log('[1 |       À vista     | 8% de desconto |  ]' );
console.log('[2 | À vista no cartão | 4% de desconto |  ]' );
console.log('[3 |      2 vezes      |  Preço Normal  |  ]' );
console.log('[4 |      4 vezes      | 8% de acréscimo|  ]') ; 

entradaDados.question('Escolha o código correspondente a forma de pagamento ' , function(opcao){

    // let resultado = opcao;
   if(opcao == '1' ){
    const desconto = (preco * 8) / 100 
    const resultado = preco - desconto

   }
 console.log(resultado)
  });  
});
