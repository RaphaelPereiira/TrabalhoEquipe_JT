// Carrega a entrada pelo terminal.
const prompt = require('prompt-sync')();

// Cada empréstimo ocupa três posições: aluno, livro e data.
// Exemplo:
// ['Ana', 'Livro A', '05/11/2026', 'Pedro', 'Livro B', '06/11/2026'].
//
// const impede reatribuir a variável,
// mas permite adicionar elementos ao vetor.
const cadastro = [];

// Define a função de cadastro.
// Ela só executa quando é chamada no menu.
function cadastrarEmprestimo() {
  // let permite alterar a resposta a cada pergunta.
  let resposta;

  // do...while executa o cadastro pelo menos uma vez.
  do {
    // console.log exibe mensagens.
    // \n insere uma quebra de linha.
    console.log('\n--- Cadastro de empréstimo ---');

    // prompt recebe texto.
    // push adiciona cada resposta ao final do vetor.
    // A ordem precisa ser sempre: aluno, livro e data.
    cadastro.push(prompt('Nome do aluno? '));
    cadastro.push(prompt('Qual livro você deseja? '));
    cadastro.push(prompt('Data do empréstimo: '));

    console.log('\nEmpréstimo cadastrado!');

    // Este laço interno repete apenas a pergunta de continuação.
    do {
      resposta = prompt('Deseja realizar um novo cadastro? s/n: ');

      // !== significa diferente.
      // && exige que as duas condições sejam verdadeiras.
      // A resposta é inválida se não for 's' nem 'n'.
      if (resposta !== 's' && resposta !== 'n') {
        console.log('Resposta inválida. Digite s ou n.');
      }
    } while (resposta !== 's' && resposta !== 'n');

    // O laço externo repete o cadastro somente se a resposta for 's'.
  } while (resposta === 's');
}

// lista é o parâmetro que recebe o vetor enviado na chamada.
function listarEmprestimos(lista) {
  // length informa a quantidade de elementos.
  // Zero significa que o vetor está vazio.
  if (lista.length === 0) {
    console.log('\nNenhum empréstimo cadastrado.');

    // Encerra esta função; o programa continua no menu.
    return;
  }

  console.log('\n--- Lista de empréstimos ---');

  // i começa em zero, pois os índices do vetor começam em zero.
  // O laço continua enquanto i for menor que lista.length.
  // i += 3 equivale a i = i + 3: avança até o próximo aluno.
  for (let i = 0; i < lista.length; i += 3) {
    // [i] é o aluno, [i + 1] é o livro e [i + 2] é a data.
    // O + depois do texto junta o rótulo ao valor armazenado.
    console.log('\nAluno: ' + lista[i]);
    console.log('Livro: ' + lista[i + 1]);
    console.log('Data: ' + lista[i + 2]);
  }
}

// Procura todos os empréstimos com o nome informado.
function buscarEmprestimo() {
  // Verifica se existem dados antes de solicitar a busca.
  if (cadastro.length === 0) {
    console.log('\nNenhum empréstimo cadastrado.');

    // Encerra esta função; o programa continua no menu.
    return;
  }

  console.log();
  const nome = prompt('Nome do aluno? ');

  // false indica que nenhum registro foi encontrado até agora.
  let encontrou = false;

  // Percorre somente as posições dos nomes: 0, 3, 6, 9...
  for (let i = 0; i < cadastro.length; i += 3) {
    // === compara valor e tipo.
    // O nome pesquisado precisa ser exatamente igual ao cadastrado.
    if (nome === cadastro[i]) {
      console.log('\n--- Empréstimo encontrado ---');
      console.log('Aluno: ' + cadastro[i]);
      console.log('Livro: ' + cadastro[i + 1]);
      console.log('Data: ' + cadastro[i + 2]);

      // Marca que houve resultado.
      // O laço continua procurando outros empréstimos do aluno.
      encontrou = true;
    }
  }

  // Entra aqui se encontrou ainda for false.
  if (!encontrou) {
    console.log('Nenhum empréstimo encontrado para esse aluno.');
  }
}

// Menu principal.
// A opção muda a cada repetição, por isso usamos let.
let opcao;

// O menu aparece pelo menos uma vez e se repete até a opção '4'.
do {
  console.log('\n=== BIBLIOTECA SABER EM AÇÃO ===');
  console.log('1 - Cadastrar empréstimo');
  console.log('2 - Listar empréstimos');
  console.log('3 - Buscar empréstimo pelo aluno');
  console.log('4 - Encerrar');

  // prompt retorna texto.
  // Por isso, as opções são comparadas com valores entre aspas.
  opcao = prompt('Escolha uma opção: ');

  // Executa somente o primeiro bloco cuja condição seja verdadeira.
  if (opcao === '1') {
    cadastrarEmprestimo();
  } else if (opcao === '2') {
    // Envia o vetor cadastro para o parâmetro lista.
    listarEmprestimos(cadastro);
  } else if (opcao === '3') {
    buscarEmprestimo();
  } else if (opcao === '4') {
    console.log('Programa encerrado.');
  } else {
    // Executado quando nenhuma das opções anteriores corresponde.
    console.log('Opção inválida. Digite de 1 a 4.');
  }

  // Faz uma pausa antes de voltar ao menu, exceto ao encerrar.
  // A resposta não é armazenada: serve apenas para aguardar Enter.
  if (opcao !== '4') {
    console.log();
    prompt('Pressione Enter para voltar ao menu...');
  }

  // Repete o menu enquanto a opção for diferente de '4'.
} while (opcao !== '4');

// Os dados ficam na memória e são perdidos ao encerrar.
// Esta versão não valida campos vazios nem a existência da data.
// Na pergunta de continuação, digite exatamente s ou n em minúsculas.