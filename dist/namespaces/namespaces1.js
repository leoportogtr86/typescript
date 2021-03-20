"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Areas = void 0;
var Areas;
(function (Areas) {
    function quadrado(lado) {
        return lado * lado;
    }
    Areas.quadrado = quadrado;
    function retangulo(base, altura) {
        return base * altura;
    }
    Areas.retangulo = retangulo;
    function triangulo(base, altura) {
        return (base * altura) / 2;
    }
    Areas.triangulo = triangulo;
})(Areas = exports.Areas || (exports.Areas = {}));
console.log(Areas.quadrado(9));
console.log(Areas.retangulo(10, 4));
console.log(Areas.triangulo(2, 3));
