Algoritmo "ImpostoDeRenda"

var
nomedotrabalhador: caractere
rendaanual: real

inicio

rendaanual <- 30000
 enquanto (rendaanual > 19000) faca

    escreval ("Qual o nome do trabalhador?: ")
    leia (nomedotrabalhador)
    escreval ("Qual a renda anual do trabalhador? ")
    leia (rendaanual)

    se (rendaanual > 19000) entao
        escreval ("Não isento do imposto de renda! ")
    senao
        escreval ("Isento do imposto de renda! ")
    fimse
 fimenquanto
fimalgoritmo