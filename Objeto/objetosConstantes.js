const pessoa = { nome: 'Pedro'}
pessoa.nome = 'Joao'
console.log(pessoa)
// uma vez criada a constante pessoa, ela não pode ser redefinida com outro objeto, apenas pode ter
// seus atributos alterados -- > pessoa.nome
// Exemplo

//pessoa = { nome: 'Margareth'} // nao pode ser atribuido estes valores nesta constante
// podemos congelar os atributos de um objeto - sem modificar, incluir ou deletar.
Object.freeze(pessoa)
pessoa.nome= 'Joana' // nao ira gerar erro, mas continuará o nome definido na linha 2
console.log(pessoa)
delete pessoa.nome
console.log(pessoa)