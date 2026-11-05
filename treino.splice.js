const prompt = require ('prompt-sync')();

let numeros = [1,2,3,4,5];
let numerosfora = numeros.splice(2,3);

console.log(numerosfora);
console.log(numeros);

//sintaxe do splice -> vetor.splice(indiceInicial, quantidadeDeItensParaRemover);
//quantidade de itens para remover começa a partir do indiceinicial,incluindo ele proprio.