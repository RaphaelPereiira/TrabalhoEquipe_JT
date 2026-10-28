algoritmo "ControleDeCompras"

var
   produto: caractere
   quantidade, itens, opcao: inteiro
   preco, subtotal, total: real
   orcamento, desconto, valorDesconto, totalFinal: real
   saldo, maiorSubtotal: real
   produtoMaiorSubtotal: caractere

inicio
   total <- 0
   itens <- 0
   maiorSubtotal <- 0
   produtoMaiorSubtotal <- ""

   escreval("--- CONTROLE DE COMPRAS ---")

   repita
      escreva("Quanto você tem disponível para gastar? R$ ")
      leia(orcamento)

         se (orcamento <= 0) entao
            escreval("Informe um orçamento maior que zero.")
         fimse
   ate (orcamento > 0)

   repita
      escreva("Nome do produto: ")
      leia(produto)

      repita
         escreva("Quantidade: ")
            leia(quantidade)

            se (quantidade <= 0) entao
               escreval("A quantidade deve ser maior que zero.")
            fimse
      ate (quantidade > 0)

      repita
         escreva("Preço por unidade: R$ ")
            leia(preco)

            se (preco <= 0) entao
               escreval("O preço deve ser maior que zero.")
            fimse
      ate (preco > 0)

      subtotal <- preco * quantidade
      total <- total + subtotal
      itens <- itens + quantidade

      se (subtotal > maiorSubtotal) entao
         maiorSubtotal <- subtotal
         produtoMaiorSubtotal <- produto
      fimse

      escreval("Subtotal do produto: R$ ", subtotal)
      escreval("Total acumulado: R$ ", total)

      se (total > orcamento) entao
         escreval("Atenção: o total ultrapassou seu orçamento!")
         escreval("Valor excedido: R$ ", total - orcamento)
      senao
         escreval("Ainda disponível: R$ ", orcamento - total)
      fimse

      repita
         escreva("Adicionar outro produto? 1-Sim / 2-Não: ")
         leia(opcao)

         se (opcao <> 1 e opcao <> 2) entao
            escreval("Opção inválida. Digite 1 ou 2.")
         fimse
      ate (opcao = 1 ou opcao = 2)

   ate (opcao = 2)

   repita
      escreva("Desconto percentual da compra (0 a 100): ")
      leia(desconto)

      se (desconto < 0 ou desconto > 100) entao
         escreval("Informe um desconto entre 0 e 100.")
      fimse
   ate (desconto >= 0 e desconto <= 100)

   valorDesconto <- total * desconto / 100
   totalFinal <- total - valorDesconto
   saldo <- orcamento - totalFinal

   escreval("=== RESUMO DA COMPRA ===")
   escreval("Quantidade total de unidades: ", itens)
   escreval("Total sem desconto: R$ ", total)
   escreval("Valor do desconto: R$ ", valorDesconto)
   escreval("Total a pagar: R$ ", totalFinal)
   escreval("Orçamento disponível: R$ ", orcamento)
   escreval("Produto com maior subtotal: ", produtoMaiorSubtotal)
   escreval("Subtotal desse produto: R$ ", maiorSubtotal)

   se (saldo >= 0) entao
      escreval("A compra está dentro do orçamento!")
      escreval("Dinheiro restante: R$ ", saldo)
   senao
      escreval("O dinheiro disponível não é suficiente.")
      escreval("Faltam: R$ ", totalFinal - orcamento)
   fimse

fimalgoritmo