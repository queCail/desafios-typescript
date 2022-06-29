/*
O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

*/
//Resposta
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var saldoTotal = 0;
limpaSaldo();
function somarAoSaldo(soma) {
    return saldoTotal += soma;
}
function saldoToInnerHTML() {
    var saldo = saldoTotal.toString();
    campoSaldo.innerHTML = saldo;
}
function limparCampoSoma() {
    soma.value = "";
}
function limpaSaldo() {
    campoSaldo.innerHTML = '';
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
    saldoToInnerHTML();
    limparCampoSoma();
});
botaoLimpar.addEventListener('click', limpaSaldo);
