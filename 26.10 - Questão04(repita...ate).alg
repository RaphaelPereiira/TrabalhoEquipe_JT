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

se (caixa>=carro) entao
escreval ("Você tem dinheiro suficiente para comprar o carro, pois o valor do carro é R$ " + carro + "!")
senao
escreval ("Você não tem dinheiro suficiente para comprar o carro, pois o valor do carro é R$ " + carro + "!")
fimse

se (((caixa >= 40000) e (fabricante = "ford" ou fabricante = "Ford") e (potênciadomotor = 1.8) e (cor = "azul" ou cor = "Azul"))) entao
escreval ("Parabéns, você pode comprar o carro!")
senao
escreval ("Desculpe, mas você não pode comprar o carro.")
fimse
ate (((caixa >= 40000) e (fabricante = "ford" ou fabricante = "Ford") e (potênciadomotor = 1.8) e (cor = "azul" ou cor = "Azul")))

fimalgoritmo