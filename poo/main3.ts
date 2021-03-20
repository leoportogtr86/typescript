import {Mercado} from './models/Mercado'
import {Produto} from './models/Produto'


let bemais = new Mercado("supermercado")

let arroz = new Produto(0, "arroz", "Tião", 5)

bemais.setNome("Bemais supermercados")


bemais.cadastrarProduto(arroz)


console.log(bemais.getNome())


console.log(arroz)

console.log(bemais.getProdutos())