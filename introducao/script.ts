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