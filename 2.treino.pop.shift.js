const prompt = require ('prompt-sync')();

let cores = ["vermelho", "azul", "verde", "amarelo"];

//Remove e guarda
let CorRemovidaInicio = cores.shift();
let CorRemovidaFim = cores.pop();

console.log(cores)
console.log([CorRemovidaInicio, CorRemovidaFim])

//pop remove o último elemento do vetor.
//shift remove o primeiro elemento do vetor.
//resultado: [ 'azul', 'verde' ]

//unshift adiciona um elemento no início do vetor vazio.
//push adiciona um elemento no final do vetor vazio.
//resultado: [ 'vermelho', 'amarelo' ]

