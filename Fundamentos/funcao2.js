// armazenando uma funcao numa variavel 
const imprimirSoma = function (a,b) { 
    console.log(a+b)
}


imprimirSoma(2,3)


// armazenando uma função arrow em uma variavel
const soma = (a,b) => {
    return a + b
}

console.log(soma(5,8))

// retorno implicito - quando temos uma funcao com apenas 1 setença de código
const subtracao = (a,b) => a - b

console.log(subtracao(5,4))
