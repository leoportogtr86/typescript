import { Disciplina } from './Disciplina';


export class Aluno {

    
    
    private disciplinas: Array<Disciplina> = []

    constructor (private nome: string, private idade: number){


    }

    getNome(): string{

        return this.nome

    }

    setNome(nome: string){

        this.nome = nome

    }

    matricularEmDisciplina(disciplina: Disciplina){

        this.disciplinas.push(disciplina)


    }

    getDisciplinas(): Disciplina[]{

        return this.disciplinas

    }
}