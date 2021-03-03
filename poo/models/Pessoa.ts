import {Notebook} from './Notebook'
import {Guitarra} from './Guitarra'



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