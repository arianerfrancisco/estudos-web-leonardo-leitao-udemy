const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Fala' // contexto léxico 2
    return saudacao
}

// objetos sao grupos aninhados de pares nome/valores

const cliente = {
    nome: 'Pedro', 
    idade: 32,
    endereco: { 
        rua: 'Abilio',
        cidade: 'Londrina',
    }

}

console.log(cliente)