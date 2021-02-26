import {Notebook} from './notebook'



export class Pessoa{

    constructor(private nome: string, private notebookAtual: Notebook, private notebookNovo: Notebook){


    }


    dizerNome(): string {

        return this.nome
    }

    dizerNotebook(): Notebook{

        return this.notebookAtual
    } 

    comprarNotebook(notebook: Notebook): void{

        this.notebookAtual = this.notebookNovo


    }
}