// usando notação literal
const obj1 = {}
console.log(obj1)

// Função new Object
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções Construtoras
function Produto(nome, preco, desc) { // preco  e descontos estao encapsulados, sendo assim nao pode ser alterados no escopo global
    this.nome = nome // com o uso do this o atributo se torna publico, podendo ser alterado
    this.getPrecoComDesconto = () => {
        return preco*(1-desc)
    }
}
    
const p1 = new Produto('Caneta', 7.99, 0.1)
console.log(p1.getPrecoComDesconto())
const p2 = new Produto('Notebook', 2999.89, 0.25)
console.log(p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas, 
        getSalario() {
            return (salarioBase/30)*(30-faltas)
        }
     }
}

const f1 = criarFuncionario('Joao', 9888, 1)
const f2= criarFuncionario('Maria', 1000, 10)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha =  Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma funcao famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)