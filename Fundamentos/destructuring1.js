// retirar atributos de um objeto - Destructuring
const pessoa = {
    nome: 'ariane',
    idade: 5,
    endereco: {
        logradouro: 'Rua A', 
        numero:100,

    }
}

console.log(pessoa)


const { nome, idade } = pessoa //  operador destructuring > tira do objeto pessoa os atributos nome e idade
console.log(nome, idade)

const {nome: n, idade:i} = pessoa // alem de tirar esse atributo do objeto, podemos definir como uma variavel
console.log(n, i)