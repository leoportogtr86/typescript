"use strict";
//comandos=>
//npm start (live-server) starta o projeto e abre o servidor
//tsc -w (monitora e compila os arquivos ts para js)
console.log('hello typescript');
var msg = 'Bom dia!';
console.log(msg);
//----------------------------------------------
var idade = 34;
console.log("O dobro da idade \u00E9 " + idade * 2);
//----------------------------------------------
var isCasado = true;
if (isCasado) {
    console.log('casado');
}
else {
    console.log('solteiro');
}
//----------------------------------------------
var frutas = ['uva', 'limão', 'maça'];
console.log(frutas);
//----------------------------------------------
var idades = [54, 10, 23, 78];
console.log(idade);
//----------------------------------------------
var dados = ['Leo Porto', 34];
console.log(dados);
//----------------------------------------------
var DiaSemana;
(function (DiaSemana) {
    DiaSemana["domingo"] = "domingo";
    DiaSemana["segunda"] = "segunda";
    DiaSemana["terca"] = "terca";
    DiaSemana["quarta"] = "quarta";
    DiaSemana["quinta"] = "quinta";
    DiaSemana["sexta"] = "sexta";
    DiaSemana["sabado"] = "sabado"; //6
})(DiaSemana || (DiaSemana = {}));
var diaAula = DiaSemana.sabado;
console.log(diaAula);
//----------------------------------------------
var carro = 'range rover evoque';
carro = { marca: "fiat", modelo: "mobi" };
console.log(carro);
//----------------------------------------------
var retornaMsg = function () {
    return 'Hello world';
};
console.log(retornaMsg());
//----------------------------------------------
function vazia() {
    console.log('função com retorn vazio');
}
vazia();
//----------------------------------------------
function soma(n1, n2) {
    return n1 + n2;
}
console.log(soma(10, 45));
//----------------------------------------------
//tipando a variavel como funcao (definindo que paramtros ela recebe, assim como o tipo do seu retorno)
var somar;
somar = soma;
console.log(somar(98, 97));
