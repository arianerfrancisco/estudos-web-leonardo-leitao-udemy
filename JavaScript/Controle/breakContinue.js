const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

for ( x in nums) {
    if (x==5) {
        break // nao age sobre o bloco if, mas sobre o bloco for, quando chegar no indice 5 ele irá parar
    }
    console.log(`índice ${x}= ${nums[x]}`)
}

for (y in nums) {
    if (y==5) {
        continue // ele irá pular o indice 5, mas continuará o laço de repetição
    }
    console.log(`índicej ${y}= ${nums[y]}`)
}

externo: for (a in nums) { // não é uma boa prática  <<<<<<<<<<<<<<<<<<<<
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par =  ${a}, ${b}`) // irá parar em 2,3
    }
}

console.log('Fim')