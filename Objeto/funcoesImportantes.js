const pessoa = { 
    nome: 'Rebeca',
    idade: 2,
    peso: 10
}
// acessar apenas as chaves e valores do objeto
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
// retornar o objeto em formato de array
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach( e => {
    console.log(`${e[0]}:${e[1]}`)
})
// outra forma
console.log('Outra forma')
Object.entries(pessoa).forEach( ([chave, valor]) => {
    console.log(`${chave}:${valor}`)
})

// definir propriedade

Object.defineProperty(pessoa, 'dataNascimento', { 
    enumerable: true, // permite ser numerado
    writable: false, // propriedade nao permite ser alterada
    value: '01/01/2019'
})

console.log(pessoa.dataNascimento)
pessoa.dataNascimento = '01/01/2000' // nao pode ser alterada
console.log(pessoa.dataNascimento)

// Object.assign: adicionando atributos ao objeto

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4} // sobrescreve o a:1
const obj = Object.assign(dest, o1, o2) // concatenação
console.log(obj)