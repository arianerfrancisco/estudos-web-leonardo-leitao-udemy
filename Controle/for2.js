const notas = [ 6.7, 7.4, 9.8, 10.1]

for(let i in notas) {
    console.log(i,notas[i])
}

const pessoa = { 
    Nome: 'Ana', 
    Sobrenome: 'Silva',
    Idade: 29,
    Peso: 64
}

// percorrendo um objeto

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}