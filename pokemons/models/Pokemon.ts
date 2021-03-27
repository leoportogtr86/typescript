import {Tipo} from '../enums/tipo'
import {IPokemon} from '../interfaces/IPokemon'


export class Pokemon implements IPokemon {   
    

    constructor (public nome: string, public tipo: Tipo, public saude: number, 
        public agilidade: number, public ataque: number, public defesa: number, 
        public ataqueEspecial: number, public defesaEspecial: number){


    }

    private evoluir(): void{

        console.log("Parabéns, seu pókemon evoluiu!!!")

    }

    setAtributos(saude: number, agilidade: number, ataque: number, defesa: number, ataqueEspecial: number, defesaEspecial: number){


        this.saude = saude
        this.agilidade = agilidade
        this.ataque = ataque
        this.defesa = defesa
        this.ataqueEspecial = ataqueEspecial
        this.defesaEspecial = defesaEspecial

        if (this.saude == 100 && this.agilidade == 100 && this.ataque == 100 && this.defesa == 100 && this.ataqueEspecial == 100 && this.defesaEspecial == 100){


            this.evoluir()
        }
    }




    
}