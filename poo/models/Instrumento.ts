export class Instrumento {

    private tipo: string
    private marca: string
    private modelo: string
    private preco: number


    

    getTipo(): string{

        return this.tipo
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

    //---------------------------------------------------------

     setTipo(tipo: string):void{

        this.tipo = tipo
    }

     setMarca(marca: string):void{

        this.marca = marca
    }

     setModelo(modelo: string):void{

        this.modelo = modelo
    }

     setPreco(preco: number):void{

        this.preco = preco
    }

    //--------------------------------------------------------------

    play(): void{

        console.log("Let's play!!!")
    }

   
}