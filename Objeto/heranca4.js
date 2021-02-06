function MeuObject() {} // funcao que cria um objeto
console.log(MeuObject.prototype)

const obj1 = new MeuObject // as mesmas instancias apontadas para a mesma funcao construtora, possuem o mesmo prototype
const obj2 = new MeuObject

// as mesmas instancias apontadas para a mesma funcao construtora, possuem o mesmo prototype


console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObject.prototype === obj1.__proto__)

MeuObject.prototype.nome = 'Anônimo'
MeuObject.prototype.falar = function() { 
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Josefa'
obj2.falar()

const obj3 = {}
obj3.__proto__ =MeuObject.prototype // idem ao == >>>  const obj1 = new MeuObject

obj3.nome = 'Nome do Objeto 3'
obj3.falar()