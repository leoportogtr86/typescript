var a = 'Leo Porto...';
console.log(a);
//para converter o arquivo em js => tsc nomeDoArquivo.ts
//ele ira gerar um arquivo js
var carros = ['fusca', 'gol', 'ka', 'uno', 'range rover'];
console.log(carros);
function divisao(a, b) {
    return a / b;
}
console.log(divisao(9, 4));
var NotasMusicais;
(function (NotasMusicais) {
    NotasMusicais["do"] = "C";
    NotasMusicais["re"] = "D";
    NotasMusicais["mi"] = "E";
    NotasMusicais["fa"] = "F";
    NotasMusicais["sol"] = "G";
    NotasMusicais["la"] = "A";
    NotasMusicais["si"] = "B";
})(NotasMusicais || (NotasMusicais = {}));
var arpejoCMaior = [NotasMusicais.do, NotasMusicais.mi, NotasMusicais.sol];
console.log(arpejoCMaior);
var pentaCMaior = [NotasMusicais.do, NotasMusicais.re, NotasMusicais.mi, NotasMusicais.sol, NotasMusicais.la];
console.log(pentaCMaior);
function hello(msg) {
    console.log(msg);
}
hello('Opa, bom dia!!');
