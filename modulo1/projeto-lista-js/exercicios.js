// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
 let altura = Number(prompt("Digite a altura?"))
 let base = Number(prompt("Digite a base?"))
  let multiplicação = base * altura
  console.log(multiplicação)

return multiplicação


}
// EXERCÍCIO 02
function imprimeIdade() {
  let anoNascimento = prompt("Digite sua o ano de nascimento?")
  let anoAtual = prompt("Digite ano atual?")
  let idade = anoNascimento - anoAtual
  console.log(idade)
  return idade

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
 imc = peso / (altura * altura)
 console.log(imc)
 return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Digite seu nome?")
  let idade = prompt("Digite sua idade ?") 
  let email = prompt("digite seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
 let cores = []
 let corfavorita1 = prompt("Digite 1° cor favorita ?")
let corfavorita2 = prompt("Digite 2° cor favorita ?")
let corfavorita3 = prompt("Digite 3° cor favorita ?")
cores.push(corfavorita1, corfavorita2, corfavorita3)
console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
letraMaiuscula = string.toUpperCase()

console.log(letraMaiuscula)
return letraMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 divisao = custo / valorIngresso
 console.log(divisao)
return divisao
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
let a = string1.length
let b = string2.length
let c = a === b
console.log(c)
return c

}
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
 let item1 = array[0]
console.log(item1)
return item1

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
 
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
 let 
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let nome1 = string1.toUpperCase()
  let nome2 = string2.toUpperCase()
  let igualdade = nome1 === nome2

console.log(igualdade)
return igualdade
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}