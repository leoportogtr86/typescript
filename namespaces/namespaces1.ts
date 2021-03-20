export namespace Areas {


    export function quadrado (lado: number): number{

        return lado*lado
    }


    export function retangulo(base: number, altura: number): number {


        return base*altura
        
    }


    export function triangulo(base: number, altura: number): number {

        return (base*altura)/2
    }
}


console.log(Areas.quadrado(9))
console.log(Areas.retangulo(10, 4))
console.log(Areas.triangulo(2, 3))