
let comidaPreferidas = ["pizza", "açai", "lasanha", "hamburguer", "cuscuz"];

console.log(comidaPreferidas);

let comidaPreferidas2 = 
`pizza
açai
lasanha
hamburguer
cuscuz.`

console.log(`Essas são as minhas comidas preferidas:, ${comidaPreferidas2}`)

let comidaPreferidaUsuario = prompt("Qual sua comida preferida ?")

console.log(comidaPreferidas2.replaceAll("açai", comidaPreferidaUsuario))