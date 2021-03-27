import {Disciplina} from './Disciplina'

export class Professor{    

    
    constructor(private nome: string, private  disciplina?: Disciplina){


    }

    getNome (): string{

        return this.nome

    }

    setNome (nome: string){

        this.nome = nome
    }

    setDisciplina (disciplina: Disciplina){

        this.disciplina = disciplina


    }

    getDisciplina(): Disciplina{

        return this.disciplina


    }
}