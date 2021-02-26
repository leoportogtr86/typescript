"use strict";
var Notebook = /** @class */ (function () {
    function Notebook(marca, modelo, preco, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.preco = preco;
        this.cor = cor;
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
var notebook = new Notebook("apple", "mac book pro", 15000, "cinza");
console.log(notebook);
