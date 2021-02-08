const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: 
        case 9: 
            console.log('Quadro de Honra') // como no case 10 nao foi passado sentença, ele irá assumirá a sentencao do case 9 e continuará executando os outros cases, para que isso não ocorra, deverá ser utilizado a palavra  case
            break
        case 8: case 7: // idem colocar um em cada linha igual foi feito case 10 e case 9
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: 
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(6)
imprimirResultado(3)
imprimirResultado(11)