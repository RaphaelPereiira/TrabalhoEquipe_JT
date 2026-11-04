const prompt = require('prompt-sync')();

let listaDeCompras = [];

// Leitura dos itens
for (let i = 0; i < 4; i++) {
  let item = prompt(`Digite o ${i + 1}º item da lista: `);
  listaDeCompras.push(item);
}

// Exibição dos resultados
console.log("\n--- Sua Lista de Compras ---");
for (let i = 0; i < listaDeCompras.length; i++) {
  console.log(`${i + 1}. ${listaDeCompras[i]}`);
}

console.log(`\nTotal de itens na lista: ${listaDeCompras.length}`);
