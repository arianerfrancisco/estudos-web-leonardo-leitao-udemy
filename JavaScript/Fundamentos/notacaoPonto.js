console.log(Math.ceil(6.1))

// criar um atribuito dentro de um objeto

const obj1 = {}

obj1.nome='Bola'
obj1['nome']= 'Bola'

// as duas formas acima são equivalentes

console.log(obj1.nome)


function Obj(nome) {
    this.nome = nome // esse this servirá para tornar o nome do objeto visivel fora da funcao, servirá também para expor funções fora deste conexto local
}

const obj2 = new Obj('cadeira') // estamos instanciando um novo objeto, usando o nome definido pela funcao Obj
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)