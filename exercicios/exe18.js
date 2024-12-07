//1. Escreva um laço que imprima a tabuadade um numero


let num2 = 1
const num = 4

while (num2 <= 10) {
    console.log(`${num2} x ${num} = ${num2 * num}`)
    num2++
}

//2.

const numeros = [2, 5, 24, 8, 9, 21]
let numero2 = 0

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numero2) {
        numero2 = numeros[i]
    }
}
console.log(`O maior numero é ${numero2}`)


//3.

const frase = ["Oi", "sumido", "tudo", "bem?", "Saudades."]

let frase2 = ""

for (let palavra of frase) {
    frase2 = frase2 + " " + palavra
}

console.log(frase2)
