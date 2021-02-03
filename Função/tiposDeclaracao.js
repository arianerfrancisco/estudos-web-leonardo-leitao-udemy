// Outras formas de declarar funcao
console.log(soma(3,4))
console.log(sub(3,4)) // nao ira funcionar, pois a variavel ainda nao foi instanciada// declarada

// FORMA TRADICIONAL - FUNCTION DECLARATION

function soma(x,y) {  // antes de executar o codigo todas as funcoes sao carregadas, podendo ser utilizada antes mesmo do proprio codigo da funcao
    return x + y
}

// FUNCTION EXPRESSION- uma function anonima é criada e atribuida à uma variavel ou constante
const sub = function(x,y) { // diferente do caso das funcoes declaradas, caso precisemos de uma funcao instanciada em uma variavel ou constante, ela nao fica disponivel para ser utilizada, antes mesmo de ter sido escrita.
    return x-y
}
console.log(sub(3,4)) // como a constante foi declarada, ira funcionar neste momento
// NAMED FUNCTION EXPRESSION - pouco usada
const mult = function mult (x,y) { // util para debugaçao de codigos
    return x * y
}