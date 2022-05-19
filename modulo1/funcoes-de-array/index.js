//Exercícios de interpretação de código


//1-a- O nome e apelido dos usurarios 

//2-a- Apenas os nomes 

//3-a-O nome e apelido dos 2 primeiros usuarios 




//Exercícios de escrita de código


//1-a
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
//   const apenasNomes = pets.map((item, index, array) => {
//       return item.nome
//   })
// console.log(apenasNomes)

// //b-
// const apenasSalsisha = pets.filter((pets) =>{
//     return pets.raca === "Salsicha"
// })
// console.log(apenasSalsisha)

// //c-
// const apenasPooles = pets.filter((pets) => {
//   if(pets.raca === "Poodle") {
//       console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`)
//   }
// })
// console.log(apenasPooles)



//2-a
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
//  const apenasNomes = produtos.map((item) => {
//      return item.nome
//  })
// console.log(apenasNomes)

// //b-

// const produtoDesconto = produtos.map((item) =>{
// return {nome: item.nome, preco:(item.preco * 0.95)}

// })
// console.log(produtoDesconto)

// //c-
// const categoriaBebida = produtos.filter((produtos) =>{
//     return produtos.categoria === "Bebidas"
// })
// console.log(categoriaBebida)

// //d-
// const apenasYpe = produtos.filter((produtos) =>{
//     return produtos.nome.includes("Ypê")
// })
// console.log(apenasYpe)

//e-
