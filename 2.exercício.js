const prompt = require('prompt-sync')();
const hoje = new Date();
//Controlar empréstimos de livros.

let listadeemprestimos = [];
let nomedocliente;

//Adquirir informações do usuário: 
for (rep = 0; rep <2; rep++){
listadeemprestimos[rep] = prompt("Digite o ${rep + 1}º item que deseja: ");
nomedocliente = prompt("Qual seu o nome? ");

console.log("Empréstimo do livro " + listadeemprestimos[rep] + " para " + nomedocliente + ", na data " + hoje.toLocaleDateString() + ", foi realizado com sucesso!")
}

//Exibição dos resultados:
console.log("\n--- Sua lista de empréstimos ---");
for (let rep = 0; rep < listadeemprestimos.length; rep++) {
  console.log(`${rep + 1}. ${listadeemprestimos[rep]}`);
}

console.log(`\nTotal de itens na lista: ${listadeemprestimos.length}`);

