

const num1 = 6
const num2 = 6
const num3 = 7

const condicao1 = ( num1 === num2) || ( num1 === num3)  || (num2 === num3)

if (condicao1) {
    console.log(`Nessa condição tem numeros identicos.`)
} else {
    console.log(`Nessa condição não existem numeros identicos.`)
}

//2.

const idade = 16

const condicao2 = idade >=18

if (condicao2) {
    console.log(`Eu sou de idade.`)
} else {
    console.log(`Eu não sou maior de idade.`)
}

//3.

const num4 = 26

const condicao3 = (num4 % 2) === 0 

if (condicao3) {
    console.log(`O numero ${num4} é par.`)
} else {
    console.log(`O numero ${num4} é impar.`)
}