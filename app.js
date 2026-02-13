/*********************************************************
 * Objetivo:
 * Autor: Gabriel José
 * Data: 13/02/2026
 * Versão: 1.0.13.2
 * 
 ********************************************************/

//Criando o readline
const readline = require('readline');

entradaDedados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Variaveis de importação de outros arquivos
const UI = require('./modulos/UI');
const UTILIDADES = require('./modulos/utilidades');
const ERRO = require('./modulos/ERROS');
const CALCULOS = require('./modulos/calculos');

//Criando a interface inicial
UI.criarUiEntrada();

//Pedindo o primeiro número
entradaDedados.question('Digite o PRIMEIRO número: ', (numeroUm) => {
    let primeiroNumero = numeroUm;
    primeiroNumero = UTILIDADES.tratarNumero(primeiroNumero);

    if (UTILIDADES.verificarNumero(primeiroNumero)) { //Verificando se o primeiro número é válido
        //Pedindo o segundo número
        entradaDedados.question('Digite o SEGUNDO número: ', (numeroDois) => {
            let segundoNumero = numeroDois;
            segundoNumero = UTILIDADES.tratarNumero(segundoNumero);

            if (UTILIDADES.verificarNumero(segundoNumero)) { //Verificando se o segundo número é válido
                //Pedindo o tipo de operação
                entradaDedados.question('\n Escolha o tipo de operação elas podem ser: \n ------------------------- \n + ("MAIS" ou "ADIÇÃO"), \n - ("MENOS" ou "SUBTRAÇÃO"), \n x ("VEZES" ou "MULTIPLICAÇÃO"), \n / ("DIVIDIDO" ou "DIVISÃO") \n  ------------------------- \n Resposta: ', (respota) => {
                    let respotaUsuario = respota;

                    let resultado = CALCULOS.calcular(respotaUsuario, primeiroNumero, segundoNumero); //Chamando a função de calculo.

                    //Se o calculo for bem sucedido exibimos na tela
                    if (resultado) {
                        UI.exibirResultado(resultado);
                    } else { //Caso seja feita uma escolha invalida
                        console.log(ERRO.ERRO_ESCOLHA_INVALIDA);
                        entradaDedados.close();
                    }

                    entradaDedados.close();
                });
            } else { //Erro caso o numero 1 seja inválido
                console.log(ERRO.ERRO_NUMERO_INVALIDO);
                entradaDedados.close();
            }

        });
    } else { //Erro caso o numero 2 seja inválido
        console.log(ERRO.ERRO_NUMERO_INVALIDO);
        entradaDedados.close();
    }
});