const prompt = require('prompt-sync')();

let cores = ["vermelho", "azul", "verde", "amarelo"];

cores.shift("vermelho");
cores.pop("amarelo");

console.log (cores)

//pop remove o último elemento do vetor.
//shift remove o primeiro elemento do vetor.
//resultado: [ 'azul', 'verde' ]

