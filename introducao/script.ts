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

//----------------------------------------------

let pessoa: {nome: string, idade: number} ={

    nome: 'Leo Porto',
    idade: 34
}

console.log(pessoa)

let car: {modelo: string, marca: string, preco: number} = {

    modelo: 'range rover evoque',
    marca: 'land rover',
    preco: 350000


}


console.log(car)


//-----desafio-----

let funcionario: {

    supervisores: string[],
    baterPonto: (horas: number) => string

} = {

    supervisores : ['Bruno', 'Maria'],

    baterPonto(horas: number): string{

        if (horas < 8){

            return 'Horário normal'


        } else {

            return 'horário irregular'
        }


    }

}

console.log(funcionario)

//---------------------------------------------------------


//alias
type Automovel = {

    marca: string,
    modelo: string,
    preco: number,
    andar: (velocidade: number) => string


}

let evoque1: Automovel = {

    marca: 'land rover',
    modelo: 'range rover evoque',
    preco: 350000,
    andar: (velocidade: number): string=>{

        return `andando a ${velocidade} km/h.`
    }
}


console.log(evoque1.andar(180))

//-----------------------------------------------

let cpf: number | string = 123456789

console.log(cpf)

cpf = '123456789'

console.log(cpf)


