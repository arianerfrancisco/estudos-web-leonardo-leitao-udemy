//objetos: coleções de chaves e valores, podemos criar um objeto vazio e incluindo seus valores de forma dinâmica 
const prod1 ={}
prod1.nome='Celular Ultra Mega'
prod1.preco = 88.5
// a chave pode ser demonstrada de outra forma
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço
console.log(prod1)

// abaixo outra forma de criar objetos
const prod2 = {
    nome: 'Camisa',
    preco: 79.90,
}

console.log(prod2)
// pode haver uma estrutura aninhada de objetos