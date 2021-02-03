function getPreco(imposto=0, moeda= '$') {
    return `${moeda} ${this.preco * (1-this.desc)*(1+imposto)}`
}

const produto= {
    nome: 'Notebook', 
    preco: 4589, 
    desc: 0.15,
    getPreco
}

global.preco= 20
global.desc= 0.1

console.log(getPreco()) // ele ira utilizar os valores de preco global e nao o atributo do objeto produto
console.log(produto.getPreco()) // neste caso, chamou a funçao como atributo do objeto preço

const carro= { preco:49990, desc: 0.20 } // outra forma de instanciar um objeto preço
console.log(getPreco.call(carro)) // neste caso aqui.. o call irá contextualizar a funcao getPreco com o objeto carro
console.log(getPreco.apply(carro))

// ** a diferenca entre apply e call é a forma de informar os parametros, no apply os parametros precisam ser definidos como array

console.log(getPreco.call(carro, 0.17, '&')) 
console.log(getPreco.apply(carro, [0.17,'&' ]))

console.log(getPreco.apply(global, [0.17,'&' ])) // neste escopo contextualizou no contexto global e neste caso pegara os valores que estao na linha 12 e 13