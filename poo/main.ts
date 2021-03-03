import {Guitarra} from './models/Guitarra'
import {Pessoa} from './models/Pessoa'
import {Notebook} from './models/Notebook'



let g1 = new Guitarra("Ibanez", "rgx-300", 4500, 6)
let g2 = new Guitarra("Fender", "amercian standard", 10500, 6)
let g3 = new Guitarra("Suhr", "Scott Henderson", 12500, 6)
let g4 = new Guitarra("Ibanez", "semiacustica", 13500, 6)
let n1 = new Notebook("Lenovo", "ideapads145", 1800, "cinza")
let n2 = new Notebook("Apple", "Macbook pro", 18000, "cinza")



let p1 = new Pessoa("Leo Porto", n1, n2, [g1, g2, g3, g4])

console.log(p1)


