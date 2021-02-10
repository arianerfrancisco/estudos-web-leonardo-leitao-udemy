//console.log(global)

global.MinhaApp = Object.freeze({
    saudacao () {
        return 'Estou em todos os lugares!'
    }, 
    nome: 'Sistema Legal'

})

// utilizamos freeze para congelar os atributos e nao poder ser alterador externamento.