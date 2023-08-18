/*
 * Objetivo: manipular entrada e saida de dados para p usuario
 * Data: 04/08/2023
 * Autor: Giovana Vieira
 * Versao: 1.0
 */
/*Importar da biblioteca de entrada de dados via teclado

/*formas de criar variaveis e constantes:

var - permite criar uma variavel de escopo global, ou seja, irá existir em todo projeto
let - permite criar uma variavel de escopo local o global, ou seja, irá existir apenas dentro daquel bloco
const - permite criar uma constante que pode ser espaço local ou global, empre ultilizamos em situaçao onde não haverá mudança de conteúdo 


*/



var readline = require('readline');

//Criando um objeto entradaDados para ser uma instancia/referencia da biblioteca readline
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//funcao de callBack que permite apresentar uma mensagem no terminal, e captar a digitacao dp usuario
//Obs: O dado digitado chegara para dentro da funcao atraves do seu argumento(nomeUsuario)
entradaDeDados.question('Digite o seu nome: ', function(nomeUsuario){
   //Recebe o nome digitado
    var nome = nomeUsuario
//Entrada de dados idade 
    entradaDeDados.question('Digite sua idade: ', function(idadeUsuario){
        var idade = idadeUsuario
        entradaDeDados.question('Digite seu telefone: ', function(telefoneUsuario){
            var telefone = telefoneUsuario
            entradaDeDados.question('Digite seu email: ', function(emailUsuario){
                var email = emailUsuario

    //Exibe uma mensagem no terminal com o nome digitado
    console.log('Bem vindo ao aplicativo, ' + nome)
    console.log('A idade informada foi, ' + idade)
    console.log('O telefone informada foi, ' + telefone)
    console.log('O email informado foi, ' + email)
 
    //encerrar o programa de entrada de dados
    entradaDeDados.close();
            })
        })
    })
});
