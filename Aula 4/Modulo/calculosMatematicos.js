/*
 * Data: 10/08/2023
 * Autor: Giovana Vieira
 * Versao: 1.0
 */

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

module.exports={
    calculadora 
}