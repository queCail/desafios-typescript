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
let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

let saldoTotal = 0;

limpaSaldo();

function somarAoSaldo(soma: number): number{
    return saldoTotal += soma;
}

function saldoToInnerHTML(): void{
    let saldo = saldoTotal.toString();
    campoSaldo.innerHTML = saldo;
}

function limparCampoSoma(): void {
    soma.value = "";
}

function limpaSaldo(): void{
    campoSaldo.innerHTML = '';
}

botaoAtualizar?.addEventListener('click', () => {
    somarAoSaldo(Number(soma.value));
    saldoToInnerHTML();
    limparCampoSoma();
});

botaoLimpar.addEventListener('click', limpaSaldo)

