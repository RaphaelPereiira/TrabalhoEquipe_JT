const prompt = require('prompt-sync')();

let compras = []

compras.unshift('feijão')
compras.push('arroz')
compras.push('macarrão')

console.log(compras)

//unshift adiciona um elemento no início do vetor vazio.
//push adiciona um elemento no final do vetor vazio.
//resultado: [ 'feijão', 'arroz', 'macarrão' ]