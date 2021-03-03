"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guitarra = void 0;
var Instrumento_1 = require("./Instrumento");
var Guitarra = /** @class */ (function (_super) {
    __extends(Guitarra, _super);
    function Guitarra(numeroCordas) {
        var _this = _super.call(this) || this;
        _this.numeroCordas = numeroCordas;
        return _this;
    }
    return Guitarra;
}(Instrumento_1.Instrumento));
exports.Guitarra = Guitarra;
var guitarra = new Guitarra(6);
guitarra.setMarca("Fender");
guitarra.setModelo("Strato");
guitarra.setPreco(6000);
console.log(guitarra);
