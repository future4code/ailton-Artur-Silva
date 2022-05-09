let nome;
let idade;

console.log(typeof idade);// Vai sair undefined pois nada foi atribuido a elas

console.log(typeof nome); //Vai sair undefined pois nada foi atribuido a elas


 nome = prompt ("Qual seu nome?");

 idade = prompt ("Qual sua idade?");

 console.log(nome);

 console.log(idade);

 console.log(typeof nome);

 console.log(typeof idade);//Saiu string pois e visto como textos

 console.log("Olá", nome ,"voçê tem", idade, "anos");