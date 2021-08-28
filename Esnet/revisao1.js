/* var não possui escopo de bloco, enquanto que let sim. O que significa que o var pode ser acessado fora do bloco.
{
    bloco
}
*/
// template string 
const produto = 'caneta'
console.log('${produto} é caro!')

// destructuring > tirar itens de uma estrturua - ex: array, string, objeto
// Desestruturar uma string
const [l, e, ... tras ] = "Cod3r"
console.log(l, e, tras)

// Desestruturar um array
const [x, ,y] = [1,2,3]
console.log(x,y)

//Desestruturar atributos de um objeto
const {idade:i, nome} = {nome:'Ana', idade:9}
console.log(i,nome)