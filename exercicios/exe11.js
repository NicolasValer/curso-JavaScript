//1.

console.log(`Escolha seu Pokemon para iniciar sua aventura!`)

const pokemonInicial = "squirtle"

switch (pokemonInicial) {
    case 'bulbasauro':
        console.log(`Seu Pokemon inicial é so tipo Planta e Veneno`)
        break;
    case 'charmander':
        console.log(`Seu Pokemon inicial é do tipo Fogo`)
        break;
    case 'squirtle':
        console.log(`Seu Pokemon inicial é do tipo Água`)
        break;
    default:
        console.log(`Esse pokemon não pode ser escolhido`)
        break;
}