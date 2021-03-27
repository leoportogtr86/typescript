"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(nome, tipo, saude, agilidade, ataque, defesa, ataqueEspecial, defesaEspecial) {
        this.nome = nome;
        this.tipo = tipo;
        this.saude = saude;
        this.agilidade = agilidade;
        this.ataque = ataque;
        this.defesa = defesa;
        this.ataqueEspecial = ataqueEspecial;
        this.defesaEspecial = defesaEspecial;
    }
    Pokemon.prototype.evoluir = function () {
        console.log("Parabéns, seu pókemon evoluiu!!!");
    };
    Pokemon.prototype.setAtributos = function (saude, agilidade, ataque, defesa, ataqueEspecial, defesaEspecial) {
        this.saude = saude;
        this.agilidade = agilidade;
        this.ataque = ataque;
        this.defesa = defesa;
        this.ataqueEspecial = ataqueEspecial;
        this.defesaEspecial = defesaEspecial;
        if (this.saude == 100 && this.agilidade == 100 && this.ataque == 100 && this.defesa == 100 && this.ataqueEspecial == 100 && this.defesaEspecial == 100) {
            this.evoluir();
        }
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
