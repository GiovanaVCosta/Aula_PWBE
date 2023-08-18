/*
 * Objetivo: manipular entrada e saida de dados para obter uma media por aluno
 * Data: 04/08/2023
 * Autor: Giovana Vieira
 * Versao: 1.0
 */
//Importar da biblioteca de entrada de dados via teclado
var readline = require('readline');

//Criando um objeto entradaDados para ser uma instancia/referencia da biblioteca readline
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question('Digite o nome do aluno: ', function(nomeAluno){
    //Recebe o nome digitado
     var nome = nomeAluno

     //Entrada de notas dos alunos
    entradaDeDados.question('Digite a primeira nota: ', function(nota1Usuario){
        var nota1 = parseInt(nota1Usuario,10)
        entradaDeDados.question('Digite a segunda nota: ', function(nota2Usuario){
            var nota2 = parseInt(nota2Usuario,10)
            entradaDeDados.question('Digite a terceira nota: ', function(nota3Usuario){
                var nota3 =parseInt (nota3Usuario,10)
                entradaDeDados.question('Digite a quarta nota: ', function(nota4Usuario){
                    var nota4 =parseInt (nota4Usuario,10)

            

                
          var media =( (nota1 + nota2 + nota3 + nota4 ) / 4)

  //Exibe a media apartir dos dados adicionados anteriormente
    console.log('A média obtida:' +media)
                })
            })
        })
    })
})