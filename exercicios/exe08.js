/* 1) crie um algoritimo que receba 3 numeros em variaveis e a partir deles crie uma 
condicional que retorne true no caso 2 desses numeros sejam identicos
 */

const num1a = 2
const num1b = 2
const num1c = 4

const condicional1 = ( num1a === num1b) || ( num1a === num1c)  || (num1b === num1c)
console.log(`O numero ${num1a} é igual a o ${num1b} e o ${num1a} é igual a o ${num1c}? ${condicional1}`)


/* 2) crie um algoritimo que receba 3 numeros em variaveis e a partir deles crie uma condicional que retorne 
true caso o primeiro numero seja o maior dos 3 */

const num2a = 9
const num2b = 6
const num2c = 4

const condicional2 = (num2a > num2b ) && (num2a > num2c)
console.log(`O numero ${num2a} é o maior de que os numeros ${num2b} e ${num2c}?${condicional2}`)

/* 3) crie um algoritimo que receba uma idade uma em variavel e a partir dela crie uma condicional que
retorne true caso seja maiorde idade  */

const idade = 18
const num3b = 15
const num3c = 14

const condicional3 = idade >= 18
console.log(`Eu tenho ${idade} anos e meus amigo gustavo tem ${num3b} e o joão tem${num3c}, eu 
sou o mais velho?${condicional3}`)

/* 4) crie um algoritimo que receba 1 numero em uma variavel e a partir dele crie uma condicional que 
retorne true caso o numero seja par*/

const num4a = 24 
const num4b = 2

const condicional4 = (num4a % 2) === 0 
console.log(`Èu tenho ${num4a} pedaços de chocolate, tem como eu divir entre ${num4b} amigos? ${condicional4} `)
