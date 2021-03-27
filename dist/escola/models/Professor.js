"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
var Professor = /** @class */ (function () {
    function Professor(nome, disciplina) {
        this.nome = nome;
        this.disciplina = disciplina;
    }
    Professor.prototype.getNome = function () {
        return this.nome;
    };
    Professor.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Professor.prototype.setDisciplina = function (disciplina) {
        this.disciplina = disciplina;
    };
    Professor.prototype.getDisciplina = function () {
        return this.disciplina;
    };
    return Professor;
}());
exports.Professor = Professor;
