Algoritmo "CompraDeCarro"

var
cor, fabricante: caractere
potênciadomotor, caixa: real

inicio

repita
carro <- 40000

escreval ("Qual o caixa disponível?: ")
leia (caixa)
escreval ("Qual o fabricante do carro?: ")
leia (fabricante)
escreval ("Qual a potência do motor?: ")
leia (potênciadomotor)
escreval ("Qual a cor do carro?: ")
leia (cor)

se (caixa >= 40000) entao
escreval ("Como o valor do caixa é R$ " + caixa + " e o valor do carro é R$ " + carro + ", é o suficiente para comprar o carro!")
senao
escreval ("Como o valor do caixa é R$ " + caixa + " e o valor do carro é R$ " + carro + ", não é o suficiente para comprar o carro!")
fimse

se ((fabricante = "ford" ou fabricante = "Ford") e (potênciadomotor = 1.8) e (cor = "azul" ou cor = "Azul")) entao
escreval ("Você atendeu todos os requisitos da compra!")
senao
escreval ("Você não atendeu todos os requisitos da compra!")
fimse

se (((caixa >= 40000) e (fabricante = "ford" ou fabricante = "Ford") e (potênciadomotor = 1.8) e (cor = "azul" ou cor = "Azul"))) entao
escreval ("Parabéns, você pode comprar o carro!")
senao
escreval ("Desculpe, mas você não pode comprar o carro.")
fimse
ate (((caixa >= 40000) e (fabricante = "ford" ou fabricante = "Ford") e (potênciadomotor = 1.8) e (cor = "azul" ou cor = "Azul")))

fimalgoritmo