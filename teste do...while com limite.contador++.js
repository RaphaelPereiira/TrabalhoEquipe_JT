const prompt = require('prompt-sync')(); 

let contador = 0;
let nome;
do {
    nome = prompt("Escreva nomes que vem em sua mente:");
    contador++;
} while (contador <= 3);

console.log("Você digitou " + contador + " nomes.");

//Enquanto o while for verdadeiro, continua. Por isso acontecem 4 execuções do algoritmo.
//Visão do contador:
//1 execução inicial.
//3 repetições.
//Total: 4 execuções.