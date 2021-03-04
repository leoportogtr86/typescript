export class Pai {

    private nome: string
    private idade: number
    

    setNome(nome: string): void{

        this.nome = nome

    }

     setIdade(idade: number): void{

        this.idade = idade

    }
    


    dizerNome(): string{

        return `Olá meu nome é ${this.nome}.`
    }


    dizerIdade(): string{

        return `A minha idade é ${this.idade} anos.`
    }
}