/*
 * Data: 18/08/2023
 * Autor: Giovana Vieira
 * Versao: 1.0
 */

var readline = require('readline');

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

//ENTRADA DE DADOS DO PRIMEIRO VALOR
entradaDados.question('Digite o primeirovalor: ' , function(numero1){

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
            if(operacao == 'SOMAR'){
                 resultado = valor1 + valor2
            }else if(operacao == 'SUBTRAIR'){
                 resultado = valor1 - valor2
            }else if(operacao == 'DIVIDIR'){
                 resultado = valor1 / valor2
            }else if(operacao == 'MULTIPLICAR'){
                if(valor2 == 0)
                console.log('ERRO: Não é possivel realizar divisao por 0')
                 else resultado = valor1 * valor2
            }
            console.log(resultado);
        });
    });
});

