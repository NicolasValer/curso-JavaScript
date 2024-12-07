//while
  //contador
let i = 0
                //bloco
while ( i < 10 ) {
    console.log(i)
    i++
    //incremento
    //i = i + 1
}


let estomago = 0

while (estomago < 100) {
    console.log(`Quero comer mais coxinhas`)
    estomago = estomago + 10
}


//for

for (let i = 1; i <= 10; i++){
    console.log(i);
}


const numeros = [2, 3, 33, 5, 7, 10]

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}


////////////////////

const palavras = ["batata", "cenoura", "tomate"]

for(let i = 0; i < palavras.length; i++){
    palavras[i] = palavras[i].toUpperCase
}

console.log(palavras)



//for of

let maior = numeros[i];

for (let numero of numeros){
    if (numero > maior){
        maior = numero
    }
    console.log(numero)
}


