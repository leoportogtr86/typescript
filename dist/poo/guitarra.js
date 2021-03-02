"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guitarra = void 0;
var Guitarra = /** @class */ (function () {
    function Guitarra(marca, modelo, preco, numeroCordas) {
        this.marca = marca;
        this.modelo = modelo;
        this.preco = preco;
        this.numeroCordas = numeroCordas;
    }
    Guitarra.prototype.play = function () {
        console.log('Play!!');
    };
    Guitarra.prototype.getMarca = function () {
        return this.marca;
    };
    Guitarra.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    //---------------------------------------------------------
    Guitarra.prototype.getModelo = function () {
        return this.modelo;
    };
    Guitarra.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    //---------------------------------------------------------
    Guitarra.prototype.getPreco = function () {
        return this.preco;
    };
    Guitarra.prototype.setPreco = function (preco) {
        this.preco = preco;
    };
    //---------------------------------------------------------
    Guitarra.prototype.getNumeroCordas = function () {
        return this.numeroCordas;
    };
    Guitarra.prototype.setNumeroCordas = function (numeroCordas) {
        this.numeroCordas = numeroCordas;
    };
    return Guitarra;
}());
exports.Guitarra = Guitarra;
