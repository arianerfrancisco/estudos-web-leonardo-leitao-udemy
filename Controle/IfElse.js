const imprimirResultado = function(nota) {
    if(nota>=7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(2)
imprimirResultado('Epa') // o JS lança na sentença else, por ser fracamente tipado
