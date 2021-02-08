// o conceito de herança concederá atributos do pai aos filhos que não tem. Ex: o filho so buscara
// o valor de x, caso nao tenha
Object.prototype.attr0 = 'Z'
const avo = { attr1 : 'A'}
const pai = { __proto__:avo, attr2 : 'B'}
const filho = { __proto__:pai, attr3 : 'C'}

console.log(filho.attr0)

const carro = { 
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual  =  this.velMax
        }
    },
        status() {
            return `${this.velAtual}Km/h de ${this.velMax}Km/h`
        }
    }

const ferrari = { 
    modelo: 'F40',
    velMax: 324
}

const volvo = { 
    modelo: 'V40',
    status () {
        return `${this.modelo}: ${super.status()}` // super> referencia a funcao status pai
    }
}

Object.setPrototypeOf(ferrari, carro) // define que ferrari é objeto e carro é prototipo, nesta ordem
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(ferrari.__proto__)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())