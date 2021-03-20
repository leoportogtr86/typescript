import {Produto} from './Produto'

export class Negocio{

    nome: string
    endereco: string
    cnpj: string
    produtos: Produto[]


    getNome(): string{

        return this.nome
    }

     setNome(nome: string): void{

        this.nome = nome
    }

     getEndereco(): string{

        return this.endereco
    }

     getCnpj(): string{

        return this.cnpj
    }

     getProdutos(): Produto[]{

        return this.produtos
    }


    cadastrarProduto(produto: Produto): void{

        this.produtos.push(produto)
    }

    
}