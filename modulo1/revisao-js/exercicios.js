// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b)
   
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((a) => a % 2 === 0 )
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 const pares = array.filter((a) => a % 2 === 0 )
 .map((a)=>{return a ** 2}) 

 }

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let Objeto = {
    maiorNumero: num1 = num2,
    maiorDivisivelporMenor: num1 % num2 == 0,
    diferente: num2 - num1
}
return Objeto

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

if (ladoA === ladoB && ladoB === ladoC){
    return "Equilátero"
}else if (ladoA === ladoB || ladoA === ladoC || ladoC === ladoB){
return "Isósceles"
 }else  {
     return "Escaleno"
 }}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novoNome = {
       ...pessoa,
       nome:"ANÔNIMO"
   }
   return novoNome
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
 const pessoaAuto = pessoas.filter((autorizadas)=>{
     return autorizadas.altura >= 1.5 && autorizadas.idade >= 15 && autorizadas.idade < 60

 })
 return pessoaAuto
} 

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoAuto = pessoas.filter((pessoas)=>{
      return pessoas.idade <= 14 || pessoas.idade >= 60 || pessoas.altura < 1.5
  })
  return pessoasNaoAuto
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
 let compras = contas.map((clientes)=>{
     for (let compra of clientes.compras){
        clientes.saldoTotal = clientes.saldoTotal - compra;    
      }
         return {...clientes,
        saldoTotal:clientes.saldoTotal,
          compras:[]
      }
    })
    return compras
}
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}
// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}