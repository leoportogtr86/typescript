"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instrumento = void 0;
var Instrumento = /** @class */ (function () {
    function Instrumento() {
    }
    Instrumento.prototype.getTipo = function () {
        return this.tipo;
    };
    Instrumento.prototype.getMarca = function () {
        return this.marca;
    };
    Instrumento.prototype.getModelo = function () {
        return this.modelo;
    };
    Instrumento.prototype.getPreco = function () {
        return this.preco;
    };
    //---------------------------------------------------------
    Instrumento.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Instrumento.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Instrumento.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Instrumento.prototype.setPreco = function (preco) {
        this.preco = preco;
    };
    //--------------------------------------------------------------
    Instrumento.prototype.play = function () {
        console.log("Let's play!!!");
    };
    return Instrumento;
}());
exports.Instrumento = Instrumento;
