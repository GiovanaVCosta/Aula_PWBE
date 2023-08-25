/*
 * Data: 18/08/2023
 * Autor: Giovana Vieira
 * Versao: 1.0
 */

//import fs biblioteca de calculosMatematico.js
var calculosMatematicos = require('./Modulo/calculosMatematicos.js')

var readline = require('readline');

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

//ENTRADA DE DADOS DO PRIMEIRO VALOR
entradaDados.question('Digite o primeiro valor: ' , function(numero1){

    let valor1 = numero1.replace(',','.');
//ENTRADA DE DADOS DO SEGUNDO DE DADOS
    entradaDados.question('digite o segundo valor:' , function(numero2){
        let valor2 = numero2.replace(',','.');

//ENTRADA DE DADOS PARA ESCOLHER OÇÃO DE CALCULO        
        entradaDados.question('Escolha a opção do calculo: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR ]' , function(opcao){
            //toUpperCase - converte uma string para MAIUSCULO
            //toLowerCase - converte uma string para MINUSCULO
            let operacao = opcao.toUpperCase();

//CONVERÇAO
valor1= Number(valor1);
valor2= Number(valor2);


//VALIDAÇÃO DO TIPO DE OPERAÇAÕ MATEMÁTICA
 //           if(operacao == 'SOMAR')
 //                resultado = valor1 + valor2
  //          else if(operacao == 'SUBTRAIR')
 //                resultado = valor1 - valor2
   //         else if(operacao == 'MULTIPLICAR')
  //          resultado = valor1 * valor2
 //           else if(operacao == 'DIVIDIR')

             resultado = calculosMatematicos.calculadora(valor1, valor2, operacao)
            
            if (resultado){
            console.log(resultado);
            } 
            entradaDados.close()
        
        });

    });
});

//AS ENTRADAS-> ARGUMENTOS, SEMPRE DENTRO DO()

//MODELO TRADICIONAL DE CRIAR FUNÇÕES
function calculadora(numero1, numero2, tipoCalculo){

    //VERSÃO 2.0 - UTILIZANDO SWITCH CASE

    let valor1 = numero1;
    let valor2 = numero2;
    let operacao = tipoCalculo;
    let resultado;

    switch(operacao){
        case "SOMAR":
         //   case "+":()
            resultado = valor1 + valor2;
            break;
        case "SUBTRAIR":
            resultado = valor1 - valor2;
          break;
        case "MULTIPLICAR":
            resultado = valor1 * valor2;
           break;
        case "DIVIDIR":
            if (valor2 == 0)
            console.log('ERRO: NÃO É POSSIVEL REALIZAR A OPERAÇÃO COM O VALOR 0')
            else
            resultado = valor1 / valor2;
           break;
           default:
            console.log('ERRO: É  OBRIGATÓRIO ESCOLHER APENA OPERÇÕES LISTADAS')
           break;
    }
    if(resultado != undefined)
    return resultado;
    else
    return false;
}
