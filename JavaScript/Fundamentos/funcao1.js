// funcao - bloco de codigo
// funcao sem retorno 

function imprimirSoma(a, b) {
    console.log(a+b)
}
// temos que chamar a funcao
imprimirSoma(2, 3)
imprimirSoma(2) // como nao passamos o segundo valor, o mesmo sera assumido como undefined e o retorno da funcao sera NaN
imprimirSoma(2, 10, 12, 11)
// varios parametros podem ser passados, porem a function so ira utilizar a quantidade definida, ignorando o resto

// funcao com retorno
function soma(a, b= 1) {
    return a + b
}

console.log(soma(2,3))
// apesar de na funcao b ter sido atribuido como 1, ele assumirá o valor referenciado pela ultima vez