class Notebook{


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

console.log(notebook)