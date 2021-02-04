const produto = new Object
produto.nome= 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']

const carro = { 
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        idade: 56,
        endereco: {
        logradouro: 'Rua ABC',
        numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
}, {
    nome: 'Ana', 
    idade: 42
}],
calcularValorSeguro: function () {

}
    
}

carro.proprietario.endereco.numero = 1000 // incluindo  o valor a partir do chamamento
console.log(carro)
carro['proprietario']['endereco']['logradouro'] = 'Avenida Gigante'
console.log(carro)