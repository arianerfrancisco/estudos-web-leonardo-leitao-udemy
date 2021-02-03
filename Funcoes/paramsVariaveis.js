function soma(){
    let soma = 0
    for ( i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(4,5,8,7,5,2, 'Teste')) // se colocarmos neste caso uma string nos argumentos, irá concatenar com os numeros que foram somados