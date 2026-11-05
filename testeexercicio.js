const prompt = require('prompt-sync')();

let cadastro = []
let respostadocadastro;

//cadastro do cliente:
do {
console.log('Cadastro:')
console.log('')
cadastro.push(prompt('Qual o seu nome? '))
cadastro.push(prompt('Qual livro você deseja? '))
cadastro.push(prompt('Data do emprestimo: '))
console.log('')
respostadocadastro = (prompt('Deseja realizar um novo cadastro? S/N: '));
} while (respostadocadastro !== 'N');


console.log('Pesquise o seu emprestimo ')
console.log('')
let nome = (prompt('Qual o seu nome? '))
for (let i = 0; i < cadastro.length; i += 3) {
if (nome === `${cadastro[i]}`) {

//Impressão do cadastro do cliente:
console.log('');
console.log('--- Cadastro do cliente ---')
console.log(`Nome: ${cadastro[i]}`)
console.log(`Livro do emprestimo: ${cadastro[i+1]}`)
console.log(`Data do emprestimo: ${cadastro[i+2]}`)
}
}

//unshift adiciona um elemento no início do vetor vazio.
//push adiciona um elemento no final do vetor vazio.

// começamos declarando nossas variaveis para lidar com o cadastro do cliente e a repetição do while, em seguida, iniciamos o "do", pois naquele bloco de chaves faremos a repetição do cadastro, caso o usuário responda S.

//for "let i = 0" -> o "0" representa o primeiro indice do vetor, ou seja, foi atribuido ao i o primeiro indice do vetor.
//for "i < cadastro.length" -> significa que i tem que ser menor do que o tamanho total do vetor.
//Obs: o tamnho total do vetor vai depender do tanto de cadastro feito.
//for "i + =3" -> como o nome do cliente ocupa a posição 0,3,6,9,12...Sempre a uma soma de +3 até chegar no nome do cliente novamente.
//for "i + =3" -> ao final de cada execução, vai aumentar o valor do índice em 3 para sempre identificar o nome do cliente no índice correto.

//caso nome seja igual ao indice nome do indice atual -> verdadeiro e entra no bloco de chaves.
