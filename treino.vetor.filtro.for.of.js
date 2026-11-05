const prompt = require ('prompt-sync')();

function ehmaior (idade) {
return idade >= 18
}

let idades = [12, 18, 15, 22, 30, 14, 19];
let maioresdeidade = idades.filter(ehmaior);

console.log(maioresdeidade)

for (let adultos of maioresdeidade) {
console.log("Aprovado com idade: " +adultos)
}
for(let indice in maioresdeidade) {
console.log("Sua posição é: " +indice)
}


//criei uma função e seu fator boleano para ajudar o filtro a filtrar a variavel idades.
//function estamos declarando a iniciação da função.
//ehmaior é o nome declarado da função, onde usaremos esse nome para anexar essa função e sua condição em outro parametro.
//O (idade) é o parâmetro que serve exatamente para transportar o número que está sendo testado para dentro da condição booleana (idade >= 18).
//Etapas do filter:
//O .filter() pega um número do vetor.
//Ele joga esse número dentro da função usando o parâmetro (idade).
//A condição booleana avalia esse parâmetro e devolve true ou false.
//for (let adultos of maioresdeidade) = guardamos os elementos da variavel maioresdeidade dentro de uma nova variavel chamado de adultos e então usamos o console.log para listar  os elementos que foi para variavel adultos.
//poderia ser assim tbm: 
// let maioresdeidade = idades.filter(function(idade) {
// return idade >= 18;
// });
//ou
//let maioresdeidade = idades.filter(idade => idade >= 18);
//Como a variavel é um vetor, o for in retornará os indices.