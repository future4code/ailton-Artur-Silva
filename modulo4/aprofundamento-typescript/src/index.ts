// a
// tipo number nao pode ser atribuida a string


//b
//Com Union Types  let meuNumero: number|string 


//c
enum corFavorita1 {
    CorArcoIris = 'ArcoIris'
}
 type pessoa = {
    nome: string ,
    idade: number ,
    corFavorita: string
 }
 const pessoa1: pessoa = {
    nome:'Artur',
    idade: 30,
    corFavorita: corFavorita1.CorArcoIris
} 
const pessoa2: pessoa = {
    nome:'Enzo',
    idade: 8,
    corFavorita: corFavorita1.CorArcoIris
} 
console.table(pessoa1)
console.table(pessoa2)