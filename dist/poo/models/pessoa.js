"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, notebookAtual, notebookNovo, guitarras) {
        this.nome = nome;
        this.notebookAtual = notebookAtual;
        this.notebookNovo = notebookNovo;
        this.guitarras = guitarras;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerNotebook = function () {
        return this.notebookAtual;
    };
    Pessoa.prototype.comprarNotebook = function (notebook) {
        this.notebookAtual = this.notebookNovo;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
