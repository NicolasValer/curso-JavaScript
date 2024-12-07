/*  const largura = 2
const altura = 5
const area = largura * area
console.log(area)

const largura2 = 2
const altura2 = 5
const area2 = largura * area
console.log(area2)

const largura3 = 7
const altura3 = 2
const area3 = largura * area
console.log(area3)  

da muito trabalho*/

//assim se cria uma função

function calculaArea (largura,altura){
    const area = largura * altura
    console.log(area)
}

calculaArea(2,5)


function frase (nome){
    console.log(`Olá ${nome}, tudo bem com vocês?`)
}

frase(`Nicolas`)


function fraseSemNome (){
    console.log(`Olá pessoal, tudo bem?`)
}

fraseSemNome()


/*                    |  parametros |
function calculaArea (largura,altura){
                /utilizando parametros/
    const area = largura * altura
    console.log(area)
} */

function soma(num1,num2) {
    let soma = num1 + num2
    console.log(soma)
}

soma(3,5)


function minhaDivisao(num1) {
    if (num1 !== 0) {
        let divisao = 10 / num1
        console.log(sivisao)

    } else {
        const frase = `Não existe divisao por 0.`
        console.log(frase)
    }
}

minhaDivisao(2)

function soma(num1,num2) {
    let soma = num1 + num2
    console.log(soma)
    return soma
}

const resultado = soma(5,9)

console.log(resultado + 2)


function caucArea(altura, largura){
    const area = altura * largura
    return area 
}

const area = calculaArea(2,3)