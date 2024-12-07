
const readlineSync2 = require('readline-sync');

const nome = readlineSync2.question('qual o seu nome?');

const email = readlineSync2.question('qual é seu email?');

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome} !`)

//

const comidasFavoritas = ["pizza", "churrasco", "suchi", "bolo", "xis"]
console.log(comidasFavoritas)

console.log(`Essas são minhas comidas prederidas`, "\n", comidasFavoritas[0], "\n", comidasFavoritas[1],
    "\n", comidasFavoritas[2], "\n", comidasFavoritas[3], "\n", comidasFavoritas[4])

const comida = readlineSync2.question('qual a sua comida favorita?');

comidasFavoritas.splice(1, 1, comida)

console.log(comidasFavoritas)

//3.

const listaDeTarefas = []

const tarefas = readlineSync2.question('cite 3 tarefas que precissa fazer no dia dia.');

console.log(tarefas)

const indice = readlineSync2.question('escolha um indice que voce ja realizou.');

tarefas.splice(indice)

