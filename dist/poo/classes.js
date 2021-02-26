"use strict";
var Notebook = /** @class */ (function () {
    function Notebook() {
        this.marca = '';
        this.modelo = '';
        this.preco = 0;
        this.cor = '';
    }
    Notebook.prototype.ligar = function () {
        console.log('on');
    };
    Notebook.prototype.desligar = function () {
        console.log('off');
    };
    Notebook.prototype.getMarca = function () {
        return this.marca;
    };
    Notebook.prototype.getModelo = function () {
        return this.modelo;
    };
    Notebook.prototype.getPreco = function () {
        return this.preco;
    };
    Notebook.prototype.getCor = function () {
        return this.cor;
    };
    return Notebook;
}());
var lenovo = new Notebook();
console.log(lenovo);
