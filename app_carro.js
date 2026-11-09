const prompt = require('prompt-sync')();

// Classe que representa uma corrida.
class Corrida {
    constructor(trajeto, formaPagamento, status, tipoVeiculo) {
        this.trajeto = trajeto;
        this.formaPagamento = formaPagamento;
        this.status = status;
        this.tipoVeiculo = tipoVeiculo;
        this.velocidade = 0; // Velocidade inicial em km/h.
    }

    // 1. Aceita a corrida.
    aceitarMotorista() {
        this.status = "Corrida aceita";
    }

    // 2. Altera a velocidade.
    alterarVelocidade(novaVelocidade) {
        if (novaVelocidade >= 0) {
            this.velocidade = novaVelocidade;
        } else {
            console.log("A velocidade não pode ser negativa.");
        }
    }

    // 3. Altera a forma de pagamento.
    alterarFormaPagamento(novaForma) {
        this.formaPagamento = novaForma;
    }

    // 4. Cancela a corrida.
    cancelarCorrida() {
        this.status = "Corrida cancelada";
    }

    // 5. Seleciona o tipo de veículo.
    selecionarTipoVeiculo(novoTipo) {
        this.tipoVeiculo = novoTipo;
    }
}

// Classe que representa um motorista.
class Motorista {
    constructor(nome, modeloCarro, placa) {
        this.nome = nome;
        this.modeloCarro = modeloCarro;
        this.placa = placa;
    }
}

// ETAPA 2: Criação de duas corridas.
const corrida1 = new Corrida(
    "Casa → Faculdade",
    "Pix",
    "Aguardando motorista aceitar",
    "Carro"
);

const corrida2 = new Corrida(
    "Shopping → Trabalho",
    "Cartão de crédito",
    "Aguardando chegada do motorista",
    "Carro"
);

console.log("\n--- Corridas cadastradas ---");
console.log("Corrida 1:", corrida1);
console.log("Corrida 2:", corrida2);

// Demonstra a escolha de veículo antes da aceitação.
corrida1.selecionarTipoVeiculo("Carro");

// Criação de um motorista fictício.
const motorista1 = new Motorista(
    "Carlos",
    "Toyota Corolla",
    "ABC1D23"
);

// ETAPA 3: Um motorista aceita a corrida1.
console.log("\nStatus anterior da corrida 1:", corrida1.status);

corrida1.aceitarMotorista();

// ETAPA 4: Associação entre motorista e corrida.
// Este objeto guarda as referências aos dois.
const vinculo = {
    motorista: motorista1,
    corrida: corrida1
};

console.log("Motorista:", vinculo.motorista.nome);
console.log("Novo status:", vinculo.corrida.status);

// ETAPA 3: O passageiro cancela a corrida2.
console.log("\nStatus anterior da corrida 2:", corrida2.status);

corrida2.cancelarCorrida();

console.log("Novo status:", corrida2.status);

// Demonstra a alteração do pagamento.
corrida1.alterarFormaPagamento("Dinheiro");
console.log("\nPagamento da corrida 1:", corrida1.formaPagamento);

// Simula a velocidade durante o deslocamento.
corrida1.alterarVelocidade(40);
console.log("Velocidade:", corrida1.velocidade, "km/h");