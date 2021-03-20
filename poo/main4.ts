import {Horario} from './models/Horario'
import {Disciplina} from './models/Disciplina'

let d1 = new Disciplina("Ética", "Ana Paula")
let d2 = new Disciplina("Matemática", "Luís Paulo")
let d3 = new Disciplina("Geografia", "Mauro")
let d4 = new Disciplina("Português", "Assucena")


let h1 = new Horario("08/03/2021", [d1, d2, d3, d4], "Segunda")


console.log(h1)