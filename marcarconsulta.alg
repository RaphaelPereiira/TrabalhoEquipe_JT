algoritmo "MarcarConsulta"

var
nome: caractere
senha, especialidade, forma_pagamento: caractere
horario: caractere
data: caractere
inicio

escreval("=== MARCAR CONSULTA ===")

escreval("Digite o seu nome: ")
leia(nome)

repita

escreval("Olá, ", nome, "! Digite sua senha: ")
leia(senha)

se senha="1234" entao
    escreval("Senha correta!")
senao
    escreval("Senha incorreta! Tente novamente.")
fimse

ate senha = "1234"


escreval("Qual a especialidade da consulta que deseja marcar?")
leia(especialidade)

escreval("Temos disponivel nos horários: 08:00, 10:00, 14:00 e 16:00. Qual horário deseja marcar?")
leia(horario)

escreval("Qual dia deseja marcar a consulta? Datas Díspníveis: 01/07, 02/07, 03/07, 04/07, 05/07. Digite a data desejada:")
leia(data)

escreval("Qual a forma de pagamento que deseja utilizar? (Cartão, Dinheiro, Pix)")
leia(forma_pagamento)

escreval("Consulta marcada com sucesso para o dia ", data, " às ", horario, ", O pagamento será realizado via ", forma_pagamento, " no consultório.")

fimalgoritmo