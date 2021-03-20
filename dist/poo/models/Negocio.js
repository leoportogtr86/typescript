"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Negocio = void 0;
var Negocio = /** @class */ (function () {
    function Negocio() {
    }
    Negocio.prototype.getNome = function () {
        return this.nome;
    };
    Negocio.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Negocio.prototype.getEndereco = function () {
        return this.endereco;
    };
    Negocio.prototype.getCnpj = function () {
        return this.cnpj;
    };
    Negocio.prototype.getProdutos = function () {
        return this.produtos;
    };
    Negocio.prototype.cadastrarProduto = function (produto) {
        this.produtos.push(produto);
    };
    return Negocio;
}());
exports.Negocio = Negocio;
