const notas = [7.7, 6.5, 7.9, 9, 4.3]

// sem callback

const notasBaixas1 = []

for ( let i in notas) {
    if (notas[i] < 7 ) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// com callback utilizando filter

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
// exemplo acima utilizando metodo arrow functional

console.log(notasBaixas2)

// utilizando arrow com filter 

const notasBaixas3 = notas.filter( nota => nota < 7)
console.log(notasBaixas3)

//podemos criar uma arrow function separada e depois acrescentá-la nos argumentos da funcao filter

const notasMenorQue7 = nota => nota < 7
const notasBaixas4 =  notas.filter(notasMenorQue7)
console.log(notasBaixas4)