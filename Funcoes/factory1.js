// funcao constrututora, ela ira retornar um objeto

// FACTORY SIMPLES

function criarPessoa() {
    return {
        nome: 'Ana', 
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())