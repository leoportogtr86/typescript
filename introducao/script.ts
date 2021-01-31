//comandos=>
//npm start (live-server) starta o projeto e abre o servidor
//tsc -w (monitora e compila os arquivos ts para js)

console.log('hello typescript')

let msg: string = 'Bom dia!'

console.log(msg)

//----------------------------------------------

let idade: number = 34


console.log(`O dobro da idade é ${idade*2}`)

//----------------------------------------------



let isCasado: boolean = true

if (isCasado){

    console.log('casado')


} else {

    console.log('solteiro')


}

//----------------------------------------------

let frutas: string[] = ['uva', 'limão', 'maça']

console.log(frutas)

//----------------------------------------------

let idades: number[] = [54, 10, 23, 78]

console.log(idade)

//----------------------------------------------

let dados: [string, number] = ['Leo Porto', 34]

console.log(dados)


//----------------------------------------------


enum DiaSemana{

    domingo = "domingo", //0
    segunda = "segunda", //1
    terca = "terca", //2
    quarta =  "quarta", //3
    quinta = "quinta", //4
    sexta = "sexta", //5
    sabado = "sabado" //6
}


let diaAula: DiaSemana = DiaSemana.sabado

console.log(diaAula)


//----------------------------------------------



let carro: any = 'range rover evoque'

carro = {marca: "fiat", modelo: "mobi"}

console.log(carro)


//----------------------------------------------




 let retornaMsg = (): string=>{

    return 'Hello world'

 }


 console.log(retornaMsg())


//----------------------------------------------


function vazia(): void {

    console.log('função com retorn vazio')
    
}


vazia()

//----------------------------------------------


function soma(n1: number, n2: number): number {

    return n1 + n2
    
}


console.log(soma(10, 45))



//----------------------------------------------

//tipando a variavel como funcao (definindo que paramtros ela recebe, assim como o tipo do seu retorno)

let somar: (a: number, b: number)=> number

somar = soma

console.log(somar(98, 97))




let title = document.getElementById("title") as HTMLElement ;
let btn = document.getElementById('btn')!

title.innerHTML = "teste"


btn.onclick = ()=>{

    console.log('click')
}

