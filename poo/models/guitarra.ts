export class Guitarra {

    constructor(private marca: string, private modelo: string, private preco: number, private numeroCordas: number){


    }


    play(): void{

        console.log('Play!!')
    }

    getMarca(): string{

        return this.marca
    }

    setMarca(marca: string){

        this.marca = marca
    }

    //---------------------------------------------------------

     getModelo(): string{

        return this.modelo
    }

     setModelo(modelo: string){

        this.modelo = modelo
    }

    //---------------------------------------------------------


     getPreco(): number{

        return this.preco
    }

     setPreco(preco: number){

        this.preco = preco
    }

    //---------------------------------------------------------


     getNumeroCordas(): number{

        return this.numeroCordas
    }

     setNumeroCordas(numeroCordas: number){

        this.numeroCordas = numeroCordas
    }

    //---------------------------------------------------------


    
}