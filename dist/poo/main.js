"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Guitarra_1 = require("./models/Guitarra");
var Pessoa_1 = require("./models/Pessoa");
var Notebook_1 = require("./models/Notebook");
var g1 = new Guitarra_1.Guitarra("Ibanez", "rgx-300", 4500, 6);
var g2 = new Guitarra_1.Guitarra("Fender", "amercian standard", 10500, 6);
var g3 = new Guitarra_1.Guitarra("Suhr", "Scott Henderson", 12500, 6);
var g4 = new Guitarra_1.Guitarra("Ibanez", "semiacustica", 13500, 6);
var n1 = new Notebook_1.Notebook("Lenovo", "ideapads145", 1800, "cinza");
var n2 = new Notebook_1.Notebook("Apple", "Macbook pro", 18000, "cinza");
var p1 = new Pessoa_1.Pessoa("Leo Porto", n1, n2, [g1, g2, g3, g4]);
console.log(p1);
