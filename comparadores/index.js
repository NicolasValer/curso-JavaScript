// identico (===)

//"1" === "2" // false, são diferentes
//"2" === "2" // true, são indenticos
// 2 === "2" // false, tipo diferentes

const condicao = 2 === 2
console.log(`A condição é ${condicao}`)

//o valore que sai da comparação
//pode ser guardado em uma variavel
//nesse caso, condicao === false


// igual (==)

//"1" == "2" // false, são diferentes
//"2" == "2" // true, são idendicos
//2 == "2" // true, tipo iguais

const condicao2 = 1 == 2
console.log(`A condição é ${condicao2}`)

// o valor que sai da comparação
//pode ser guardado em uma variavel
//nesse caso, condicao == façse

//diferente (!==)

//"1" !== "2" //true, são diferentes
//"2" !== "2" // false, são idneticos
//2 !== "2" //true, tipos diferentes

const condicao3 = 1 !== 2
console.log(`A condição é ${condicao3}`)


//mior / maior igual (>/>=)

//1 > 2 // false, poruqe 1 é maior que 2
//2 > 2 // false, porque 2 é igual a 2 
//3 > 2 //true, porque 3 é maior a que 2

const condicao4 = 2 > 2
console.log(`A condição é ${condicao4}`)
 
//1 >= 2 //false, porque 1 é menor que 2
//2 >= 2 // true, porque 2 é igual a 2
//3 >= 2 // true, porque 3 é maior que 2

const condicao5 = 2 >= 2
console.log(`A condição é ${condicao5}`)

// menor / menor igual (</<=)

//1 < 2 // true, porque 1 é menor que 2
//2 < 2 // false, porque 2 é igual a 2
//3 < 2 // false, porque 3 é maior que 2

const condicao6 = 2 < 2
console.log(`A condição é ${condicao6}`)

//1 <= 2 //true, poruqe 1 é menor que 2 
//2 <= 2 //true, porque 2 é igual a 2 
//3 <= 2 //false, porque 3 é maior que 2

const condicao7 = 2 <= 2
console.log(`A condição é ${condicao7}`)

//condição

//condicional para ver maior numero

const a = 1
const b = 2
const c = 3


const condicional = (a > b) && (a > c)//false
const condiciona2 = (b > a) && (b > c)//false
const condiciona3 = (c > a) && (c > b)//true