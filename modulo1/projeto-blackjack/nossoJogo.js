/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const carta1 = comprarCarta();
const carta2 = comprarCarta();
const carta3 = comprarCarta();
const carta4 = comprarCarta();

const usuario = carta1.valor + carta2.valor 
const computador = carta3.valor + carta4.valor

if(confirm("Boas vindas ao jogo de Blackjack!")) {



console.log(`Usuário -  cartas: ${carta1.texto}  ${carta2.texto} pontuação - ${carta1.valor + carta2.valor} `)
console.log(`Computador - cartas ${carta3.texto} ${carta4.texto} pontuação - ${carta1.valor + carta4.valor} `)


} else{
   console.log('O jogo acabou')
}
   if (usuario > computador) {
   console.log('O usuário ganhou!')
   
   }else if (usuario < computador){
      console.log('O computador ganhou!')
   
   }else if (usuario == computador) {
      console.log('Empate!')
   }
  
   