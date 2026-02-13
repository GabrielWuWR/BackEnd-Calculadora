/*********************************************************
 * Objetivo: Arquivo com as funções uteis do projeto
 * Autor: Gabriel José
 * Data: 13/02/2026
 * Versão: 1.0.13.2
 * 
 ********************************************************/

function tratarNumero(num) {
    let numero = num;

    if(isNaN(numero)) {
        if (numero.includes(',')) {
            numero = numero.replace(',', '.');
            numero = numero;
    
            if (isNaN(numero)) {
                return false;
            } else {
                return Number(numero);
            }
        } else {
            return false;
        }
    } else {
        return Number(numero);
    }

}

//Função para verificar a integridade de um numero
function verificarNumero(num) {
    numero = num;

    if (typeof(numero) != 'number' || numero < -1000000 || numero > 1000000) {
        return false;
    } else {
        return true;
    }
};

module.exports = {
    tratarNumero,
    verificarNumero
};