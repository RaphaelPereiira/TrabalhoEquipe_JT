const prompt = require ('prompt-sync')();

let precos = [10, 20, 30];
let PrecosComDesconto = [];

for (rep = 0; rep < precos.length; rep++) {
PrecosComDesconto.push(precos[rep]-2);
console.log(PrecosComDesconto);
}


//for (rep = 0; rep < precos.length; rep++) { - coração do laço de repetição - serve para navegar por cada item da nossa lista.
//precos.length é uma propriedade que diz o tamanho total do vetor (neste caso, o tamanho é 3).
//for (i = 0; i < precos.length; i++) { = "Enquanto o valor de i for menor do que o tamanho do vetor, continue rodando".
//o loop roda enquanto rep for 0, 1 e 2.
//O ++ significa "some 1 ao valor atual" - Isso indica que, ao terminar de calcular o preço de um item, o i avança para a próxima posição (0 vira 1, depois vira 2, e assim por diante) até chegar ao fim da fila.
//PrecosComDesconto.push(precos[i]-2); = Na 1ª execução [rep] vale 10,ou seja, 10-2=8 e joga no vetor vazio.
//PrecosComDesconto.push(precos[i]-2); = Na 2ª execução (1ª repetição) [rep] vale 20,ou seja, 20-2=18 e joga no vetor vazio.
//PrecosComDesconto.push(precos[i]-2); = Na 3ª execução (2ª repetição) [rep] vale 30,ou seja, 30-2=28 e joga no vetor vazio.
//O length:
//no vetor ele usa a quantidade de elementos como base para rodar o laço de repetição.
//no string ele conta a quantidade de caracteres.

//explicação geral:
//declarei a variavel precos e sua lista de valor e declarei a variavel precoscomdesconto com o vetor vazio. Criei um laço de repetição onde declaramos o primeiro indice como ponto inicial para executar o laço de repetição, em seguida informamos o limite em que será executado o laço de repetição e adicionamos um incremento a cada repetição. Utilizando o push adicionei no vetor vazio, cada valor/indice da variavel compra com um desconto de 2 reais.

//Resultado:
//[ 8 ]
//[ 8, 18 ]
//[ 8, 18, 28 ]

