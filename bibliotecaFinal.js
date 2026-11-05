const prompt = require('prompt-sync')();

const cadastro = [];

function cadastrarEmprestimo() {
 
  let resposta;

  do {
    console.log('\n Cadastro de empréstimo ');
    
    cadastro.push(prompt('Nome do aluno? '));
    cadastro.push(prompt('Qual livro você deseja? '));
    cadastro.push(prompt('Data do empréstimo: '));

    console.log('\nEmpréstimo cadastrado!');

    do {
      resposta = prompt('Deseja realizar um novo cadastro? s/n: ');

      if (resposta !== 's' && resposta !== 'n') {
        console.log('Resposta inválida. Digite s ou n.');
      }
    } while (resposta !== 's' && resposta !== 'n');

  } while (resposta === 's');
}

function listarEmprestimos(lista) {
  if (lista.length === 0) {
    console.log('\nNenhum empréstimo cadastrado.');
    return;
  }

  console.log('\n Lista de empréstimos ');

  for (let i = 0; i < lista.length; i += 3) {
    
    console.log('\nAluno: ' + lista[i]);
    console.log('Livro: ' + lista[i + 1]);
    console.log('Data: ' + lista[i + 2]);
  }
}

function buscarEmprestimo() {
  
  if (cadastro.length === 0) {
    console.log('\nNenhum empréstimo cadastrado.');
    return;
  }

  console.log();
  const nome = prompt('Nome do aluno? ');

  let encontrou = false;

  for (let i = 0; i < cadastro.length; i += 3) {
    
    if (nome === cadastro[i]) {
      console.log('\n Empréstimo encontrado ');
      console.log('Aluno: ' + cadastro[i]);
      console.log('Livro: ' + cadastro[i + 1]);
      console.log('Data: ' + cadastro[i + 2]);

      encontrou = true;
    }
  }

  if (!encontrou) {
    console.log('Nenhum empréstimo encontrado para esse aluno.');
  }
}

let opcao;

do {
  console.log('\n           MENU ');
  console.log('1 - Cadastrar empréstimo');
  console.log('2 - Listar empréstimos');
  console.log('3 - Buscar empréstimo pelo aluno');
  console.log('4 - Encerrar');

  opcao = prompt('Escolha uma opção: ');

  if (opcao === '1') {
    cadastrarEmprestimo();
  } else if (opcao === '2') {
    listarEmprestimos(cadastro);
  } else if (opcao === '3') {
    buscarEmprestimo();
  } else if (opcao === '4') {
    console.log('Programa encerrado.');
  } else {
    console.log('Opção inválida. Digite de 1 a 4.');
  }
  
  if (opcao !== '4') {
    console.log();
    prompt('Pressione Enter para voltar ao menu...');
  }

} while (opcao !== '4');
