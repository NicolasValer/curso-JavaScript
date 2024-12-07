const num1 = 2
const num2 = 6

const soma1 = (num1 + num2)
const soma2 = (soma1 % 2) === 0


if (soma2) {
    console.log(`O numero é positivo`)
}


const multiplicacao = (num1 * num2)
const multiplicacao2 = (multiplicacao % 2) === 0

if (multiplicacao2) {
    console.log(`A multiplicação é par`)
}

const divisao1 = (num2 % 2) === 0
const divisao2 = (num1 % num2)

if (divisao1) {
    console.log(`O divisor é positivo`)
}