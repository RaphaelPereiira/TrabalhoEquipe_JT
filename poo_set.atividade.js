class Corrida {
  #passageiro;
  #valorEstimado;

  constructor(passageiro, valorEstimado) {
    this.#passageiro = passageiro;
    this.#valorEstimado = valorEstimado; // Usa o setter
}

  // TODO: Escreva o GET para passageiro
  get passageiro() {
    return this.#passageiro;
  }

  // TODO: Escreva o GET para valorEstimado
  get valorEstimado() {
    return this.#valorEstimado;
  }

  // TODO: Escreva o SET para valorEstimado com a validação
  set valorEstimado(novoValor) {
    if (novoValor >= 6) {
      this.#valorEstimado = novoValor;
    } else {
      this.#valorEstimado = 6;
      console.log("Aplicada a taxa mínima de R$ 6.00");
    }
  }
}

const corrida01 = new Corrida ('Artur', '10');
console.log(`Informações: ${corrida01.passageiro} e ${corrida01.valorEstimado}`);
corrida01.valorEstimado = 5;



