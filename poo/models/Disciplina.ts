export class Disciplina {

    constructor(private nome: string, private professor: string){


    }

    getNome(): string{

        return this.nome
    }

      getProfessor(): string{

        return this.professor
    }
}