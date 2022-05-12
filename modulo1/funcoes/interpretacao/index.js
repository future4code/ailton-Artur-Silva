let numero1 = Number(prompt("digite um numero"))

let numero2 = Number(prompt("digite outro numero"))



let calculosSoma = (num1, num2)=>{
    let soma = num1 + num2
console.log(`Soma: ${soma}`)
    return soma
 }
let calculosDivisao = (num1, num2)=>{
let divisao = num1 / num2
console.log(`divisao: ${divisao}`)
}

let calculosSubtracao = (num1, num2)=>{
   let subtracao = num1 - num2
    console.log(`subtração: ${subtracao}`)
}

let calculosMultiplicaçao = (num1, num2)=>{
    let multiplicacao = num1 * num2
    console.log(`multiplicaçao: ${multiplicacao}`)
}


calculosSoma(numero1, numero2)

calculosDivisao(numero1, numero2)

calculosMultiplicaçao(numero1, numero2)

calculosSubtracao(numero1, numero2)