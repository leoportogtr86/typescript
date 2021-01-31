const a: string = 'Leo Porto...'
console.log(a)


//para converter o arquivo em js => tsc nomeDoArquivo.ts
//ele ira gerar um arquivo js


let carros: string[] = ['fusca', 'gol', 'ka', 'uno', 'range rover']

console.log(carros)



function divisao(a: number, b: number): number {


    return a/b
    
}

console.log(divisao(9, 4))



enum NotasMusicais  {

    do = "C",
    re = "D",
    mi = "E",
    fa = "F",
    sol = "G",
    la = "A",
    si = "B"
}

let arpejoCMaior: NotasMusicais[] = [NotasMusicais.do, NotasMusicais.mi, NotasMusicais.sol] 

console.log(arpejoCMaior)

let pentaCMaior: NotasMusicais[] = [NotasMusicais.do, NotasMusicais.re, NotasMusicais.mi, NotasMusicais.sol, NotasMusicais.la]


console.log(pentaCMaior)


function hello(msg: string): void {

    console.log(msg)
    
}


hello('Opa, bom dia!!')