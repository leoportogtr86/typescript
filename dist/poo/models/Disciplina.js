"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disciplina = void 0;
var Disciplina = /** @class */ (function () {
    function Disciplina(nome, professor) {
        this.nome = nome;
        this.professor = professor;
    }
    Disciplina.prototype.getNome = function () {
        return this.nome;
    };
    Disciplina.prototype.getProfessor = function () {
        return this.professor;
    };
    return Disciplina;
}());
exports.Disciplina = Disciplina;
