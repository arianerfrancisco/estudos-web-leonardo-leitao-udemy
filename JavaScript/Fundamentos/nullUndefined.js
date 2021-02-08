let valor // nao incializada
console.log(valor)
// retorno undefined >> nenhum valor atribuido, mesmo que tenha sido declado
//console.log(valor2)//
// retorno is not defined >> pois não foi declarado

valor = null // nao tem nenhum valor e nem local na memoria, utilizamos este recurso quando queremos que a variavel aponte para um lugar vazio -- ZERAR A VARIÁVEL

const produto = {} // objeto vazio
console.log(produto.preco) // retorno undefined, pois objeto ja esta declarado
produto.preco = 3.50
console.log(produto)
console.log(produto.preco)
// quando queremos tirar o atributo de um objeto a melhor pratica é utilizar delete
produto.preco=  null
console.log(produto.preco)
console.log(!!produto.preco)
console.log(produto)