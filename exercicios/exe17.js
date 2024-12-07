//exercico 1.

function olaMundo() {
    console.log(`Olá mundo`)
}

olaMundo()


//usando o readline, os numeros devem ser inseridos pelo usuario

const readlineSync2 = require('readline-sync');

const num1 = Number(readlineSync2.question('cite um numeros para fazer uma soma.'));
const num2 = Number(readlineSync2.question('cite mais um numeros para fazer uma soma.'));

function soma1(num1, num2) {
    let soma = num1 + num2
    console.log(soma)
}


soma1(num1, num2)

//exercicio 2

//crie uma função que receba seu nome e idade atravez de readline
//dentro dela, crie uma variavel frase que receba o seguinte:
//`Olá 'fulano', você tem 'tantos' anos!`
//retorne a frase
//imprima a frase usando console.log na chamada função

const nome1 = readlineSync2.question('Qual o seu nome?.');
const idade1 = readlineSync2.question('Qual asua idade?');

function frase(nome, idade) {
    let frase = `Olá ${nome} , você tem ${idade} anos!`
    console.log(frase)
    return frase
}

const frase1 = frase(nome1, idade1)
console.log(frase)


//crie uma função que receba, como parametro, um array
//de numeros
//retorne o ultimo numero do array, acessando via indice
//mostre ele, usando um console.log na chamada da função

const array1 = [2, 5, 6, 8, 9]

function array(array) {
    return array1[array.length - 1]
}

console.log(array(array1))

