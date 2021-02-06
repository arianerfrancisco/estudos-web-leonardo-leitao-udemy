// primeira funcao que evite que o objeto tenha itens adicionados - FUNCAO PREVENTEXTENSIONS, podendo apenas deletar

const produto = Object.preventExtensions ({ 
    nome: 'Qualquer', preco: 1.99 ,  tag: 'promocao'
})
console.log('Extensível:', Object.isExtensible(produto))


produto.nome = 'Borracha' // nome pode ser alterado
produto.descricao = 'Borracha escolar branca' // nao surtira efeito no objeto
delete produto.tag // é autorizado a exclusao dos itens
console.log(produto)

// Object.seal > nao pode incluir ou deletar
const pessoa = {nome: 'Juliana', idade: 22, cidade: 'Londrina'}
console.log(pessoa)
delete pessoa.nome
console.log(pessoa)

const pessoa1 = {nome: 'Marieta', idade: 42, cidade: 'Londrina'}
Object.seal(pessoa1)
console.log('Selado:', Object.isSealed(pessoa1))
delete pessoa1.nome // nao surtira efeito
console.log(pessoa1)
pessoa1.nome = 'Josefa'
console.log(pessoa1) // os atributos podem ser alterados

// congelamento total Object.freeze 

const pessoa2 = {nome: 'Antonia' , idade: 11}
Object.freeze(pessoa2)
console.log(pessoa2)
pessoa2.nome = 'Mel' // nao surtira efeito
console.log(pessoa2)
delete pessoa2.idade // nao surtira efeito
console.log(pessoa2)