const num = [1,2,3,4,5,6,7,8,9,10,11]

let resultado = num.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

let resultado2 = num.map(soma10)
console.log(resultado2)
let resultado3 = num.map(triplo)
console.log(resultado3)
let resultado4 = num.map(paraDinheiro)
console.log(resultado4)

// poode-se incluir utilizar todas as funcoes em uma unica vez

let resultado5 = num.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado5)