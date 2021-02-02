// estrategias para gerar valor padrão, quando dados não sao passados nos argumentos
function soma (a= 1, b=1, c= 1) {
    return a + b + c
}

console.log(soma(2,2,2))
console.log(soma())

// Ex: Operador Condicional Ternário
a = 10 > 2  ? 'Sim' : 'Não'
console.log(a)