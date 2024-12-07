//includes

const pokemons = ["bulbasauro", "squietle", "charmander","kyogre"]

console.log(pokemons.length)

const melhorPokemon = pokemons.includes("kyogre")

console.log(melhorPokemon) 

//push

const numeros = [1, 2, 3]

const numerosA = numeros.push (4)
console.log(numeros)

const numerosB = numeros.push (5, 6, 7)
console.log(numeros)

//pop

const meusPeixes = ["palhaço", "mandarim", "esturjão"]

const meusPeixes1 = meusPeixes.pop()
console.log(meusPeixes)

//splice 

const letras = ["A", "B", "C", "D", "F", "G", "H"]
//indices (i)    0    1    2    3    4    5    6

const letrasA = letras.splice(2, 1)
console.log(letras)

const letrasB = letras.splice(3, 2)
console.log(letras)