"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tipo_1 = require("./enums/tipo");
var Pokemon_1 = require("./models/Pokemon");
var pikachu = new Pokemon_1.Pokemon("Pikachu", tipo_1.Tipo.Electric, 80, 45, 87, 45, 10, 45);
pikachu.setAtributos(100, 100, 100, 100, 100, 100); //Parabéns, seu pókemon evoluiu!!!
