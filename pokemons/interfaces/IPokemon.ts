import { Tipo } from '../enums/tipo';


export interface IPokemon {

    nome: string
    tipo: Tipo
    saude: number
    agilidade: number
    ataque: number
    defesa: number
    ataqueEspecial: number
    defesaEspecial: number

}