"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.disciplinas = [];
    }
    Aluno.prototype.getNome = function () {
        return this.nome;
    };
    Aluno.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Aluno.prototype.matricularEmDisciplina = function (disciplina) {
        this.disciplinas.push(disciplina);
    };
    Aluno.prototype.getDisciplinas = function () {
        return this.disciplinas;
    };
    return Aluno;
}());
exports.Aluno = Aluno;
