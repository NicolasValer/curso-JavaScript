//.1

/* Crie um programa qu peça ao usuario para inserir o seu nome e sua cor favorita e imprama a mensagem 
"A cor de FULANO é COR" */

const nome = "Nicolas"
const cor = "azul"

console.log("1A.", `A cor favorita do ${nome} é ${cor}`)

nome

//.2

/* Crie uma variavel com uma frase e imprima no console a frase alterada,com:
-todas as letras maiusculas
-na lingua do i (substituindo a vogal "o" pelo "i")
-o tamanho da frase */

const frase = "Eu gosto de ir na academia"

console.log("2A.", `${frase.toUpperCase()}`)

console.log("2B.", `${frase.replaceAll("o", "i")}`)

console.log("2C." ,"A frase:", ` ${frase} tem ${frase.length}`, "letras")