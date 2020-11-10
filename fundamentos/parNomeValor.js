// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exect(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua ***** **',
        numero: 123
    }
}

console.log(saudacao)
console.log(exect())
console.log(cliente)