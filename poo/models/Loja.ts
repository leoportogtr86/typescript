import {Notebook} from './Notebook'

export class Loja {

    constructor(private endereco: string, private listaProdutos: Notebook[]){


    }

    getEndereco(): string{

        return this.endereco
    }

    getListaProdutos(): Notebook[]{

        return this.listaProdutos
    }
}