//1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)

//nada porque não tem nada no (let array)

array = null
console.log('b. ', array)

//não vai listar o (let array) porque esta nulo

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

//vai mostrar quantos numbers tem nessa lista

let i = 0
console.log('d. ', array[i])

// vai adicionar o [i] no 0

array[i + 1] = 19
console.log('e. ', array)

//nada porque o resultado é falso

const valor = array[i + 6]
console.log('f. ', valor)

//vai mostrar o resultado da soma 

//1. Leia o código abaixo com atenção 

const readlineSync = require('readline-sync');

const frase = readlineSync.question("Digite uma frase: ");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);

//Qual será o valor impresso no console se a entrada do usuário for:
// `"Subi num ônibus em Marrocos"`?

//vai trocar todas as letras "A" pelas letras "I" e depois vai mostar
//o tamanho da string incluindo espaços
