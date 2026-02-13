/*********************************************************
 * Objetivo: Arquivo com as funções relacionadas a interface do projeto
 * Autor: Gabriel José
 * Data: 13/02/2026
 * Versão: 1.0.13.2
 * 
 ********************************************************/

//Cria a UI de começo do programa
function criarUiEntrada() {
    console.log('')
    console.log('|=======================|');
    console.log('|======Cálculos SA======|');
    console.log('|=======================|');
    console.log('');
};

//diz os tipos de operação possiveis
function criarUiOperacoes() {
    console.log('');
    console.log('-------------------------');
    console.log('+ ("MAIS" ou "ADIÇÃO"),');
    console.log('- ("MENOS" ou "SUBTRAÇÃO"),');
    console.log('x ("VEZES" ou "MULTIPLICAÇÃO"),');
    console.log('/ ("DIVIDIDO" ou "DIVISÃO")');
    console.log('-------------------------');
    console.log('');
}

//Mostra o resultado final
function exibirResultado(resultado) {
    console.log(' ');
    console.log(` O resultado da sua operação é: ${resultado}`);
    console.log('-------------------------');
}

module.exports = {
    criarUiEntrada,
    criarUiOperacoes,
    exibirResultado
};