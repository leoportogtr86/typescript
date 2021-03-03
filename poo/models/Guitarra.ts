import {Instrumento} from './Instrumento'


export class Guitarra extends Instrumento {

    constructor(private numeroCordas: number){

        super()

    }
   
}

let guitarra = new Guitarra(6)

guitarra.setMarca("Fender")
guitarra.setModelo("Strato")
guitarra.setPreco(6000)



console.log(guitarra)