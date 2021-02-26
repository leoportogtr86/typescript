export class Notebook{


    constructor(private marca: string, private modelo: string, private preco: number, private cor: string){


    }




    ligar(): void{

        console.log('on')
    }


    desligar(): void{

        console.log('off')
    }



    getMarca(): string{

        return this.marca
    }
    
    setMarca(marca: string): void{

        this.marca = marca
    }

    setCor(cor: string): void{

        this.cor = cor
    }

    setModelo(modelo: string): void{

        this.modelo = modelo
    }

    setpreco(preco: number): void{

        this.preco = preco
    }

    getModelo(): string{

        return this.modelo
    }

    getPreco(): number{

        return this.preco
    }

    getCor(): string{

        return this.cor
    }



}


let notebook = new Notebook("apple", "mac book pro", 15000, "cinza")

// console.log(notebook)

notebook.ligar()
console.log(notebook.getCor())

notebook.setMarca("Samsung")
notebook.setCor("preto")
notebook.setModelo("sam-78945")
notebook.setpreco(7800)


console.log(notebook)


