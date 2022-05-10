let suaIdade = prompt("Qual sua idade?")
let idadeMeses
let idadeDias
let idadeHoras

idadeMeses = suaIdade * 12
idadeDias = suaIdade * 365
idadeHoras = (365 * 24) * suaIdade

console.log(idadeMeses, "- meses")
console.log(idadeDias, "- dias")
console.log(idadeHoras, "- horas")