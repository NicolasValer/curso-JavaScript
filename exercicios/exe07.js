/* crie tres variaveis que guardem numeros

para cada pergunta crie uma variavel que armazena a condição
e imprima na tela a pergunta*/

const num1 = 17
const num2 = 29
const num3 = 33

//1


const condicao = (num1 === num2) && ( num1 > num3)
console.log(`1. O ${num1} é identico ao o ${num2} e o ${num1} é maior que o ${num3}? ${condicao}`)

//2

const condicao2 = (num1 !== num2) || (num1 <= num3)
console.log(`2. O ${num1} é diferente que o ${num2} e o ${num1} é menor igual que o ${num3}? ${condicao2}`)

//3

const condicao3 = (num3 > num2) && (num3 < num1)
console.log(`3. O ${num3} é maior que o ${num2} e o ${num3} é menor que o ${num1}? ${condicao3}`)