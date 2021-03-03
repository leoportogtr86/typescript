"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
var Loja = /** @class */ (function () {
    function Loja(endereco, listaProdutos) {
        this.endereco = endereco;
        this.listaProdutos = listaProdutos;
    }
    Loja.prototype.getEndereco = function () {
        return this.endereco;
    };
    Loja.prototype.getListaProdutos = function () {
        return this.listaProdutos;
    };
    return Loja;
}());
exports.Loja = Loja;
