import {Guitarra} from './models/Guitarra'
import {Pessoa} from './models/Pessoa'
import {Notebook} from './models/Notebook'


let n1 = new Notebook("Lenovo", "ideapads145", 1800, "cinza")
let n2 = new Notebook("Apple", "Macbook pro", 18000, "cinza")

let guitarra = new Guitarra(6)





guitarra.setMarca("Fender")
guitarra.setModelo("Strato")
guitarra.setPreco(6000)



console.log(guitarra)

