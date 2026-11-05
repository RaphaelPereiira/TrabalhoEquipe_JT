const prompt = require ('prompt-sync')();

let pessoa = {
    nome: "Carlos",
    idade: 25,
    profissao: "Programador"
};

for (let chave in pessoa) {
    console.log(chave); // Vai mostrar: nome, idade, profissao
}

//quando a variavel não é um vetor, o for in retorna as {}.