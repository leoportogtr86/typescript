"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pai = void 0;
var Pai = /** @class */ (function () {
    function Pai() {
    }
    Pai.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pai.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Pai.prototype.dizerNome = function () {
        return "Ol\u00E1 meu nome \u00E9 " + this.nome + ".";
    };
    Pai.prototype.dizerIdade = function () {
        return "A minha idade \u00E9 " + this.idade + " anos.";
    };
    return Pai;
}());
exports.Pai = Pai;
