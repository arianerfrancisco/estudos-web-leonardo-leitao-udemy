// funcoes anonimas não são nomeadas, sao chamadas dentro de variaveis, objetos e outras funcoes.

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao=soma) {
    console.log(operacao(a,b))
}

imprimirResultado(2, 3)

// podemos colocar uma funçao anonima nos argumentos de outra funcao.

imprimirResultado(3, 4, function(x,y) {
    return x - y
})

// podemos colocar uma arrow function no argumento.

imprimirResultado (3,4, (x,y) => x*y)

// funcao anonima dentro de um objetos.
const pessoa = {
    falar: function () {
        console.log('OPA')
    }
}

pessoa.falar() // acessando a função anonima a partir do atributo de um objeto.