import {IPokemon} from  './interfaces/IPokemon'
import {Tipo} from './enums/tipo'
import {Pokemon} from './models/Pokemon'




let pikachu = new Pokemon("Pikachu", Tipo.Electric, 80, 45, 87, 45, 10, 45)

pikachu.setAtributos(100, 100, 100, 100, 100, 100) //Parabéns, seu pókemon evoluiu!!!