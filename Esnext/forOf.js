for (let letra of "Cod3r") { // todas as letras de Cod3r s]ao percorridas através de of
    console.log(letra)
/*
RESULTADO NO TERMINAL
C
o
d
3
r
*/
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) { // utilizando i > irá percorrer os indices
    console.log(i)
/*
RESULTADO NO TERMINAL
0
1
2
*/ 
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) { // imprime tudo
    console.log(assunto)
/* RESULTADO NO TERMINAL
[ 'Map', { abordado: true } ]
[ 'Set', { abordado: true } ]
[ 'Promise', { abordado: false } ]
*/
}

for (let chave of assuntosMap.keys()) { // imprime só as chaves
    console.log(chave)
}

for (let valor of assuntosMap.values()) { // imprime só os valores
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) { // separa o objeto
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}