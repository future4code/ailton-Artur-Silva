
let listaDeTarefas = [];

let tarefas = prompt ("Digite 1° tarefas que você precisar realizar no dia");

listaDeTarefas.push(tarefas);

tarefas2 = prompt ("Digite 2° tarefas que você precisar realizar no dia");

listaDeTarefas.push(tarefas2);

tarefas3 = prompt ("Digite 3° tarefas que você precisar realizar no dia");

listaDeTarefas.push(tarefas3);

console.log(listaDeTarefas);
 
let indice = prompt("Digite o indice da tarefa que ja realizou: 0, 1 ou 2?");

listaDeTarefas.splice(indice,1);

console.log(listaDeTarefas);