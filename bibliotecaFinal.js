const prompt = require('prompt-sync')();

// Armazena os empréstimos na ordem: aluno, livro e data.
const cadastro = [];

// CADASTRO: recebe e armazena os dados de cada empréstimo.
function cadastrarEmprestimo() {
  let resposta;

  // Executa o cadastro e permite cadastrar novamente.
  do {
    console.log('\n Cadastro de empréstimo ');

    // Recebe os dados digitados pelo usuário.
    const aluno = prompt('Nome do aluno: ');
    const livro = prompt('Nome do livro: ');
    const data = prompt('Data do empréstimo: ');

    // Adiciona os três dados ao final do vetor.
    cadastro.push(aluno, livro, data);

    console.log('Empréstimo cadastrado!');

    // Repete a pergunta até o usuário digitar s ou n.
    do {
      resposta = prompt('Deseja cadastrar outro empréstimo? s/n: ');

      if (resposta !== 's' && resposta !== 'n') {
        console.log('Digite s ou n.');
      }
    } while (resposta !== 's' && resposta !== 'n');

    // Se a resposta for s, faz outro cadastro.
    // Se for n, encerra a função e volta ao menu.
  } while (resposta === 's');
}

// Exibe os dados de um empréstimo, tanto na lista quanto na pesquisa.
function mostrarEmprestimo(i) {
  // i indica a posição do aluno no vetor.
  // As duas posições seguintes guardam o livro e a data.
  console.log('\nAluno: ' + cadastro[i]);
  console.log('Livro: ' + cadastro[i + 1]);
  console.log('Data: ' + cadastro[i + 2]);
}

// LISTA: apresenta todos os empréstimos cadastrados.
function listarEmprestimos() {
  // Verifica se o vetor está vazio.
  if (cadastro.length === 0) {
    console.log('Nenhum empréstimo cadastrado.');
    return; // Encerra a função porque não há dados para listar.
  }

  console.log('\n Lista de empréstimos ');

  // Percorre o vetor de três em três, pois cada empréstimo tem três dados.
  for (let i = 0; i < cadastro.length; i += 3) {
    // Exibe o empréstimo que começa na posição i.
    mostrarEmprestimo(i);
  }
}

// PESQUISA: procura os empréstimos pelo nome do aluno.
function buscarEmprestimo() {
  // Se não houver cadastros, informa e encerra a função.
  if (cadastro.length === 0) {
    console.log('Nenhum empréstimo cadastrado.');
    return;
  }

  console.log();

  // Recebe o nome que será pesquisado.
  const nome = prompt('Nome do aluno: ');

  // Começa como false porque nenhum resultado foi encontrado ainda.
  let encontrou = false;

  // Percorre somente as posições dos nomes dos alunos: 0, 3, 6...
  for (let i = 0; i < cadastro.length; i += 3) {
    // Compara o nome digitado com o nome cadastrado.
    // Eles precisam ser exatamente iguais.
    if (nome === cadastro[i]) {
      mostrarEmprestimo(i);

      // Registra que encontrou pelo menos um empréstimo.
      encontrou = true;
    }
  }

  // Se nenhum nome correspondeu à pesquisa, exibe esta mensagem.
  if (!encontrou) {
    console.log('Nenhum empréstimo encontrado para esse aluno.');
  }
}

let opcao;

do {
  console.log('\n             MENU ');
  console.log('1 - Cadastrar empréstimo');
  console.log('2 - Listar empréstimos');
  console.log('3 - Buscar empréstimo pelo aluno');
  console.log('4 - Encerrar');

  opcao = prompt('Escolha uma opção: ');

  if (opcao === '1') {
    cadastrarEmprestimo();
  } else if (opcao === '2') {
    listarEmprestimos();
  } else if (opcao === '3') {
    buscarEmprestimo();
  } else if (opcao === '4') {
    console.log('Programa encerrado.');
  } else {
    console.log('Opção inválida.');
  }

  if (opcao === '2' || opcao === '3') {
    console.log();
    prompt('Pressione Enter para voltar ao menu...');
  }
} while (opcao !== '4');
