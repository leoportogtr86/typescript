import {Aluno} from './models/Aluno'
import {Disciplina} from './models/Disciplina'
import {Professor} from './models/Professor'





const paulo = new Aluno("Paulo", 10)
const cezar = new Professor("Cézar")
const matematica = new Disciplina("matemática", 1, cezar)

console.log(paulo.getDisciplinas())

console.log(paulo)

paulo.matricularEmDisciplina(matematica)

console.log(paulo.getDisciplinas())
