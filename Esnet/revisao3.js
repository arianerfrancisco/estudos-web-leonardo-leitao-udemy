// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj)) // extrai apenas os valores dos objetos em um array
console.log(Object.entries(obj)) // extrai apenas os valores + chaves dos objetos em um array

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome, // anteriormente precisava colocar nome:nome
    ola() { // nao precisa colocar function
       return 'Oi gente!' 
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())