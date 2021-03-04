"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Filho_1 = require("./models/Filho");
var filho = new Filho_1.Filho("Jardim 1", ["bola", "video game", "parquinho"]);
filho.setIdade(10);
filho.setNome("Juca");
console.log(filho.dizerIdade());
