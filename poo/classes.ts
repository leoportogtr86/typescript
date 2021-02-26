class Notebook{


    private marca: string = ''
    private modelo: string = ''
    private preco: number = 0
    private cor: string = ''

    




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


let lenovo = new Notebook()

console.log(lenovo)