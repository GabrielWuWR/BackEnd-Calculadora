/*********************************************************
 * Objetivo: Arquivo com as funções de cálculo do projeto
 * Autor: Gabriel José
 * Data: 13/02/2026
 * Versão: 1.0.13.2
 * 
 ********************************************************/

//Função geral que envia o tipo de operação para sua determinada função
function calcular(tipoOperacao, numUm, numDois) {
    let operacao = tipoOperacao.toLowerCase();
    let numeroUm = numUm;
    let numeroDois = numDois;

    //Grande if para verificar a escolha do usuario
    if (operacao == '+' || operacao == 'mais' || operacao == 'adiçao' || operacao == 'adicao' || operacao == 'adição') { //Para adição
        return calcularAdicao(numeroUm, numeroDois);
    } else if (operacao == '-' || operacao == 'menos' || operacao == 'subtraçao' || operacao == 'subtracao' || operacao == 'subtração') { //Para subtração
        return calcularSubtracao(numeroUm, numeroDois);
    } else if (operacao == 'x' || operacao == 'vezes' || operacao == 'veses' || operacao == 'multiplicar') { //Para multiplicação
        return calcularMultiplicacao(numeroUm, numeroDois);
    } else if (operacao == '/' || operacao == 'divisao' || operacao == 'divisão' || operacao == 'divizao' || operacao == 'dividir' || operacao == 'dividido') { //Para divisão
        return calcularDivisao(numeroUm, numeroDois);
    } else {
        return false;
    }
}

//Função para fazer soma
function calcularAdicao(numUm, numDois) {
    let numeroUm = numUm;
    let numeroDois = numDois;

    if (typeof (numeroUm) == 'number' && typeof (numeroDois) == 'number') {
        let resultado = numeroUm + numeroDois;
        return resultado.toFixed(2);
    } else {
        return false;
    }
}

//Função para fazer subtração
function calcularSubtracao(numUm, numDois) {
    let numeroUm = numUm;
    let numeroDois = numDois;

    if (typeof (numeroUm) == 'number' && typeof (numeroDois) == 'number') {
        let resultado = numeroUm - numeroDois;
        return resultado.toFixed(2);
    } else {
        return false;
    }
}

//Função para multiplicar
function calcularMultiplicacao(numUm, numDois) {
    let numeroUm = numUm;
    let numeroDois = numDois;

    if (typeof (numeroUm) == 'number' && typeof (numeroDois) == 'number') {
        let resultado = numeroUm * numeroDois;
        resultado.toFixed(2);
    } else {
        return false;
    }
}

//Função para dividir
function calcularDivisao(numUm, numDois) {
    let numeroUm = numUm;
    let numeroDois = numDois;


    if (numeroUm == 0 || numeroDois == 0) {
        return false;
    } else if (typeof (numeroUm) == 'number' && typeof (numeroDois) == 'number') {
        let resultado = numeroUm / numeroDois;
        return resultado.toFixed(2);
    } else {
        return false
    }
}

module.exports = {
    calcular
}