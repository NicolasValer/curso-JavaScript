const condicao1 = true

if (condicao1) {
    console.log(`entrei dentro do bloco if`)
}


/* atividade.
crie 2 vaiaveis (chamaremos de num1 e num2)

-crie uma estrutura condicional que compare esses numeros entre si
 -se os numeros forem identicos retorna uma mensagenm de sucesso*/

 const num1 = 4
 const num2 = 4 

 const condicao = num1 === num2 

 if (condicao) {
    console.log(`sucesso relampago mequen, katchau`)
 }



 const condicao2 = false

 if (condicao2) {
    console.log(`a condição é verdadeira!`)
 } else {
   console.log(`a condição é falsa!`) 
 }

 /* atividade 2
 crie 2 variavel (chamaremos de num1 e num2)
 
 -crie uma estrutura condicional que compare esses numeros entre si:
  -retorna mensagens dizendo se  os numeros sao identicos ou não*/

  const num3 = 2

  const condicional2 = num1 === num3

  if (condicional2) {
    console.log(`O numero ${num1} é identico ao numero ${num3}.`)
  } else {
    console.log(`O numero ${num1} não é identico ao numero ${num3}.`)
  }

  //else if

  if (2 === 2) {
    console.log(`estou no bloco if`)
  } else if(1 === 1) {
    console.log(`estou no bloco else if`)
  } else {
    console.log(`estou no bloco else`)
  }

//exemplo
  console.log(typeof num1 === "number" && typeof num2 === "number")

if (typeof num1 === "number" && typeof num2 === "number") {
    if (num1 > num2)
    console.log(`o ${num1} é maior que o ${num2}`)
  } else if(num1 < num2) {
    console.log(`o ${num1} é menor que o ${num2}`)
  } else {
    console.log(`o ${num1} é igual que o ${num2}`)
  }


  //switch case
const paisDeOrigem = "brasil"

switch (paisDeOrigem) {
  case 'brasil':
    console.log(`Voce é Brasileiro!`)
     break;
  case 'argentina':
    console.log(`Voce é Argentino!`)
    break;
  case 'inglaterra':
    console.log(`Voce é Ingles!`)
    break;
  case 'india':
    console.log(`Voce é Indiano!`)
    break;
  default:
    console.log(`Nacionalidade não encontrada...`)
    break;
}

