

const readlineSync = require('readline-sync');

const nome = readlineSync.question('qual o seu nome?');

console.log(`Olá, ${nome}!`)

//1.

const readlineSync2 = require('readline-sync');

const nome2 = readlineSync2.question('qual o seu nome?');

const cor = readlineSync2.question('qual sua cor favorita?');

console.log(`A cor favorita de ${nome2} é ${cor}`)

console.log("A cor favorita de " + nome + " é " + cor + ".")