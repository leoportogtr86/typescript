import {Notebook} from './notebook'
import {Guitarra} from './guitarra'



export class Pessoa{

    constructor(private nome: string, private notebookAtual: Notebook, private notebookNovo: Notebook, private guitarras: Guitarra[]){


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