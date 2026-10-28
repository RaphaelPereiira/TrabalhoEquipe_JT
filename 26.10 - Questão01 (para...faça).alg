Algoritmo "ResultadoFinalDeAno"

var
nomedoaluno: caractere
nota1,nota2,nota3,nota4, media: real

inicio
//nome 
//nota1  
//nota2  
//nota3  
//nota4   
//media  

para cont de 1 ate 10 faca

escreval ("Nome do aluno?:")
leia (nomedoaluno)
escreval ("Qual foi a sua nota1?")
leia (nota1)
escreval ("Qual foi a sua nota2?")
leia (nota2)
escreval ("Qual foi a sua nota3?")
leia (nota3)
escreval ("Qual foi a sua nota4?")
leia (nota4)


media <- (nota1 + nota2 + nota3 + nota4)/4

se media>=6 entao

escreval("Você foi aprovado!")

senao

escreval("Você foi reprovado!")

fimse

escreval (nomedoaluno)
escreval ("Sua media foi ", media)
fimpara

fimalgoritmo
